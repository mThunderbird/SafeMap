import { useState } from 'react';
import '../styles/forumView.css';
import useComments from '../util/useComments';
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function ForumView() {


    const comments = useComments();

    const [comment, setComment] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        console.log("Form submitted with comment:", comment);
        try 
        {

            const docRef = await addDoc(collection(db, "comments"), {
                text: comment
            });
            
            setComment("");
        }
        catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    return (
        <div className="forum-container">
            <div className="forum-header">
                <h1>Welcome to the Forum!</h1>
                <p>
                    This website is only possible when users contribute and share their experiences.
                    In a way it is a user-to-user service. It wouldn't be possible without your input!
                    Therefore, we encourage you to share your opinions and ideas on how to make <span>SafeZone</span> actually useful to you.
                </p>
                <p>
                    The forum is anonymous and is a simple chat that allows users to communicate their feedback to us.
                    Please be respectful and kind.
                </p>
            </div>

            <form className='comment-input' onSubmit={handleSubmit}>
                <textarea 
                    minLength={20} 
                    placeholder="Share your thoughts..." 
                    required 
                    value={comment}
                    onChange={(e) => setComment(e.target.value)} 
                />
                <button type="submit">Post</button>
            </form>

            <div className="comments-section">
                {
                    comments.map((comment) => (
                        <div key={comment.id} className="comment-box">
                            <div className="comment-icon"></div>
                            <div className="comment-content">
                                <p className="comment-text">{comment.text}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
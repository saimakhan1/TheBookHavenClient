// import React, { useContext, useEffect, useState } from "react";
// import { useLoaderData } from "react-router";
// import { AuthContext } from "../../Contexts/AuthContext";
// import { toast, Toaster } from "react-hot-toast";

// const BookDetails = () => {
//   const book = useLoaderData();
//   const { user } = useContext(AuthContext);

//   const { _id: bookId, title, author, genre, rating, coverImage, summary } = book;

//   const [comments, setComments] = useState([]);
//   const [commentText, setCommentText] = useState("");
//   const [loadingComments, setLoadingComments] = useState(true);

//   // Fetch comments
//   const fetchComments = async () => {
//     try {
//       const res = await fetch(`http://localhost:3000/comments?bookId=${bookId}`);
//       const data = await res.json();
//       setComments(data);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoadingComments(false);
//     }
//   };

//   useEffect(() => {
//     fetchComments();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   // Add new comment
//   const handleAddComment = async (e) => {
//     e.preventDefault();
//     if (!commentText.trim()) return;

//     const newComment = {
//       bookId,
//       userName: user?.displayName || "Anonymous",
//       userPhoto: user?.photoURL || "",
//       comment: commentText,
//       createdAt: new Date().toISOString(),
//     };

//     try {
//       const res = await fetch("http://localhost:3000/comments", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(newComment),
//       });
//       if (res.ok) {
//         toast.success("Comment added!");
//         setComments((prev) => [...prev, newComment]); // update UI immediately
//         setCommentText(""); // clear input
//       } else {
//         toast.error("Failed to add comment");
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("Failed to add comment");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#f0f8ff] to-white p-4 sm:p-6">
//       <Toaster />
//       <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Book Cover */}
//         <div className="flex justify-center items-center bg-[#e8f9ff] p-4 md:p-6">
//           <img
//             src={coverImage}
//             alt={title}
//             className="rounded-xl w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 object-cover shadow-md hover:scale-105 transition-transform duration-300"
//           />
//         </div>

//         {/* Book Info */}
//         <div className="p-4 sm:p-6 flex flex-col justify-center space-y-3 sm:space-y-4">
//           <h2 className="text-2xl sm:text-3xl font-bold text-[#0abde3]">{title}</h2>
//           <p className="text-gray-700 text-base sm:text-lg">
//             <span className="font-semibold text-[#0abde3]">Author:</span> {author}
//           </p>
//           <p className="text-gray-700 text-base sm:text-lg">
//             <span className="font-semibold text-[#0abde3]">Genre:</span> {genre}
//           </p>
//           <p className="text-gray-700 text-base sm:text-lg">
//             <span className="font-semibold text-[#0abde3]">Rating:</span> ⭐ {rating}
//           </p>
//           <p className="text-gray-700 text-base sm:text-lg">
//             <span className="font-semibold text-[#0abde3]">Summary:</span> {summary}
//           </p>
//         </div>
//       </div>

//       {/* Comments Section */}
//       <div className="max-w-4xl mx-auto mt-8 p-4 sm:p-6 bg-white rounded-xl shadow-md">
//         <h3 className="text-xl font-bold text-[#0abde3] mb-4">Comments</h3>

//         {/* Comment form */}
//         {user ? (
//           <form onSubmit={handleAddComment} className="flex flex-col sm:flex-row gap-2 mb-4">
//             <input
//               type="text"
//               placeholder="Write your comment..."
//               value={commentText}
//               onChange={(e) => setCommentText(e.target.value)}
//               className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0abde3]"
//             />
//             <button
//               type="submit"
//               className="bg-[#0abde3] text-white rounded-md px-4 py-2 hover:bg-[#08a4d6] transition-colors"
//             >
//               Add Comment
//             </button>
//           </form>
//         ) : (
//           <p className="text-gray-500 mb-4">Please log in to add a comment.</p>
//         )}

//         {/* Comments list */}
//         {loadingComments ? (
//           <p>Loading comments...</p>
//         ) : comments.length === 0 ? (
//           <p className="text-gray-500">No comments yet. Be the first to comment!</p>
//         ) : (
//           <div className="space-y-4 max-h-80 overflow-y-auto">
//             {comments.map((c, index) => (
//               <div
//                 key={index}
//                 className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg shadow-sm"
//               >
//                 {c.userPhoto ? (
//                   <img
//                     src={c.userPhoto}
//                     alt={c.userName}
//                     className="w-10 h-10 rounded-full object-cover"
//                   />
//                 ) : (
//                   <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold">
//                     {c.userName?.charAt(0)}
//                   </div>
//                 )}
//                 <div>
//                   <p className="font-semibold text-[#0abde3]">{c.userName}</p>
//                   <p className="text-gray-700">{c.comment}</p>
//                   <p className="text-xs text-gray-400 mt-1">
//                     {new Date(c.createdAt).toLocaleString()}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BookDetails;

import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";
import { toast, Toaster } from "react-hot-toast";

const BookDetails = () => {
  const book = useLoaderData();
  const { user } = useContext(AuthContext);

  const { _id: bookId, title, author, genre, rating, coverImage, summary } = book;

  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [loadingComments, setLoadingComments] = useState(true);

  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState("");
  const [loadingReviews, setLoadingReviews] = useState(true);

  // Fetch comments
  const fetchComments = async () => {
    try {
      const res = await fetch(`http://localhost:3000/comments?bookId=${bookId}`);
      const data = await res.json();
      setComments(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingComments(false);
    }
  };

  // Fetch reviews
  const fetchReviews = async () => {
    try {
      const res = await fetch(`http://localhost:3000/reviews?bookId=${bookId}`);
      const data = await res.json();
      setReviews(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingReviews(false);
    }
  };

  useEffect(() => {
    fetchComments();
    fetchReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Add new comment
  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    const newComment = {
      bookId,
      userName: user?.displayName || "Anonymous",
      userPhoto: user?.photoURL || "",
      comment: commentText,
      createdAt: new Date().toISOString(),
    };

    try {
      const res = await fetch("http://localhost:3000/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newComment),
      });
      if (res.ok) {
        toast.success("Comment added!");
        setComments((prev) => [...prev, newComment]);
        setCommentText("");
      } else {
        toast.error("Failed to add comment");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to add comment");
    }
  };

  // Add new review
  const handleAddReview = async (e) => {
    e.preventDefault();
    if (!reviewText.trim()) return;

    const newReview = {
      bookId,
      userName: user?.displayName || "Anonymous",
      userPhoto: user?.photoURL || "",
      review: reviewText,
      createdAt: new Date().toISOString(),
    };

    try {
      const res = await fetch("http://localhost:3000/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newReview),
      });
      if (res.ok) {
        toast.success("Review added!");
        setReviews((prev) => [...prev, newReview]);
        setReviewText("");
      } else {
        toast.error("Failed to add review");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to add review");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f0f8ff] to-white p-4 sm:p-6">
      <Toaster />
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Book Cover */}
        <div className="flex justify-center items-center bg-[#e8f9ff] p-4 md:p-6">
          <img
            src={coverImage}
            alt={title}
            className="rounded-xl w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 object-cover shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Book Info */}
        <div className="p-4 sm:p-6 flex flex-col justify-center space-y-3 sm:space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0abde3]">{title}</h2>
          <p className="text-gray-700 text-base sm:text-lg">
            <span className="font-semibold text-[#0abde3]">Author:</span> {author}
          </p>
          <p className="text-gray-700 text-base sm:text-lg">
            <span className="font-semibold text-[#0abde3]">Genre:</span> {genre}
          </p>
          <p className="text-gray-700 text-base sm:text-lg">
            <span className="font-semibold text-[#0abde3]">Rating:</span> ⭐ {rating}
          </p>
          <p className="text-gray-700 text-base sm:text-lg">
            <span className="font-semibold text-[#0abde3]">Summary:</span> {summary}
          </p>
        </div>
      </div>

      {/* Comments Section */}
      <div className="max-w-4xl mx-auto mt-8 p-4 sm:p-6 bg-white rounded-xl shadow-md">
        <h3 className="text-xl font-bold text-[#0abde3] mb-4">Comments</h3>

        {user ? (
          <form onSubmit={handleAddComment} className="flex flex-col sm:flex-row gap-2 mb-4">
            <input
              type="text"
              placeholder="Write your comment..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0abde3]"
            />
            <button
              type="submit"
              className="bg-[#0abde3] text-white rounded-md px-4 py-2 hover:bg-[#08a4d6] transition-colors"
            >
              Add Comment
            </button>
          </form>
        ) : (
          <p className="text-gray-500 mb-4">Please log in to add a comment.</p>
        )}

        {loadingComments ? (
          <p>Loading comments...</p>
        ) : comments.length === 0 ? (
          <p className="text-gray-500">No comments yet. Be the first to comment!</p>
        ) : (
          <div className="space-y-4 max-h-80 overflow-y-auto">
            {comments.map((c, index) => (
              <div key={index} className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg shadow-sm">
                {c.userPhoto ? (
                  <img src={c.userPhoto} alt={c.userName} className="w-10 h-10 rounded-full object-cover" />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold">
                    {c.userName?.charAt(0)}
                  </div>
                )}
                <div>
                  <p className="font-semibold text-[#0abde3]">{c.userName}</p>
                  <p className="text-gray-700">{c.comment}</p>
                  <p className="text-xs text-gray-400 mt-1">{new Date(c.createdAt).toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Reviews Section */}
      <div className="max-w-4xl mx-auto mt-8 p-4 sm:p-6 bg-white rounded-xl shadow-md">
        <h3 className="text-xl font-bold text-[#0abde3] mb-4">Reviews</h3>

        {user ? (
          <form onSubmit={handleAddReview} className="flex flex-col sm:flex-row gap-2 mb-4">
            <input
              type="text"
              placeholder="Write a short review..."
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              maxLength={100}
              className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0abde3]"
            />
            <button
              type="submit"
              className="bg-[#0abde3] text-white rounded-md px-4 py-2 hover:bg-[#08a4d6] transition-colors"
            >
              Add Review
            </button>
          </form>
        ) : (
          <p className="text-gray-500 mb-4">Please log in to add a review.</p>
        )}

        {loadingReviews ? (
          <p>Loading reviews...</p>
        ) : reviews.length === 0 ? (
          <p className="text-gray-500">No reviews yet. Be the first to review!</p>
        ) : (
          <div className="space-y-4 max-h-80 overflow-y-auto">
            {reviews.map((r, index) => (
              <div key={index} className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg shadow-sm">
                {r.userPhoto ? (
                  <img src={r.userPhoto} alt={r.userName} className="w-10 h-10 rounded-full object-cover" />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold">
                    {r.userName?.charAt(0)}
                  </div>
                )}
                <div>
                  <p className="font-semibold text-[#0abde3]">{r.userName}</p>
                  <p className="text-gray-700">{r.review}</p>
                  <p className="text-xs text-gray-400 mt-1">{new Date(r.createdAt).toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookDetails;


// import MessageSkeleton from "../../skeltons/MessageSkelton"
// import useGetMessages from "../../../hooks/useGetMessages"
// import useListenMessages from "../../../hooks/useListenMessages"
// import useConversation from "../../../zustand/useConversation";
// import { useEffect, useRef } from "react";
// import Message from "./Message"



// const Messages = () => {
//   const { selectedConversation } = useConversation();
//   const { loading, messages } = useGetMessages();
//   const messagesEndRef = useRef(null);
//   useListenMessages()
//   useEffect(() => {
//     const to = setTimeout(() => {
//       if (messagesEndRef.current) {
//         messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
//       }
//     })

//     return () =>{
//       clearTimeout(to)
//      }
//   }, [messages, selectedConversation]);
//   return (
//     <>
//       <div className="bg-[rgb(13,20,23,0.7)] p-3 min-h-full flex flex-col  justify-end">

//         {!loading && messages.length > 0 &&
//           messages.map((message, index) => (
//             <div key={index}>
//               <Message message={message} />
//             </div>
//           ))}
//         {loading && <MessageSkeleton />}

//         {!loading && messages.length === 0 && (
//           <p className="text-center text-gray-500">No conversations yet.</p>
//         )}


//         <div ref={messagesEndRef} />

//       </div>
//     </>
//   )
// }

// export default Messages



// import MessageSkeleton from "../../skeltons/MessageSkelton";
// import useGetMessages from "../../../hooks/useGetMessages";
// import useListenMessages from "../../../hooks/useListenMessages";
// import useConversation from "../../../zustand/useConversation";
// import { useEffect, useRef } from "react";
// import Message from "./Message";
// import { format, isToday, isYesterday } from "date-fns"; // Install date-fns for date utilities

// const Messages = () => {
//   const { selectedConversation } = useConversation();
//   const { loading, messages } = useGetMessages();
//   const messagesEndRef = useRef(null);

//   useListenMessages();

//   useEffect(() => {
//     const to = setTimeout(() => {
//       if (messagesEndRef.current) {
//         messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
//       }
//     });

//     return () => {
//       clearTimeout(to);
//     };
//   }, [messages, selectedConversation]);

//   const formatTimestamp = (date) => {
//     if (isToday(date)) return "Today";
//     if (isYesterday(date)) return "Yesterday";
//     return format(date, "dd MMM yyyy");
//   };

//   const shouldShowTimestamp = (currentMessage, previousMessage) => {
//     if (!previousMessage) return true;
//     const currentDate = new Date(currentMessage.createdAt);
//     const previousDate = new Date(previousMessage.createdAt);
//     return (
//       currentDate.getDate() !== previousDate.getDate() ||
//       currentDate.getMonth() !== previousDate.getMonth() ||
//       currentDate.getFullYear() !== previousDate.getFullYear()
//     );
//   };

//   return (
//     <div className="bg-[rgb(13,20,23,0.7)] p-3 min-h-full flex flex-col justify-end">
//       {!loading && messages.length > 0 &&
//         messages.map((message, index) => {
//           const showTimestamp = shouldShowTimestamp(
//             message,
//             messages[index - 1]
//           );

//           return (
//             <div key={index}>

//               {showTimestamp && (
//               <div className="flex justify-center items-center ">
//                 <p className="text-center text-gray-400 text-sm py-1 px-4 rounded-lg bg-[#1e2a30] my-2">
//                   {formatTimestamp(new Date(message.createdAt))}
//                 </p>
//               </div>
//               )}
//               <div>
//                 <Message message={message} />
//               </div>
//             </div>
//           );
//         })}

//       {loading && <MessageSkeleton />}

//       {!loading && messages.length === 0 && (
//         <p className="text-center text-gray-500">No conversations yet.</p>
//       )}

//       <div ref={messagesEndRef} />
//     </div>
//   );
// };

// export default Messages;


// import MessageSkeleton from "../../skeltons/MessageSkelton";
// import useGetMessages from "../../../hooks/useGetMessages";
// import useListenMessages from "../../../hooks/useListenMessages";
// import useConversation from "../../../zustand/useConversation";
// import { useEffect, useRef } from "react";
// import Message from "./Message";
// import { format, isToday, isYesterday } from "date-fns"; 

// const Messages = () => {
//   const { selectedConversation } = useConversation();
//   const { loading, messages } = useGetMessages();
//   const messagesEndRef = useRef(null);

//   useListenMessages(); // Listen for new messages

//   useEffect(() => {
//     if (messagesEndRef.current) {
//       messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [messages]);

//   const formatTimestamp = (date) => {
//     if (!date) return "";
//     if (isToday(date)) return "Today";
//     if (isYesterday(date)) return "Yesterday";
//     return format(date, "dd MMM yyyy");
//   };

//   const shouldShowTimestamp = (currentMessage, previousMessage) => {
//     if (!previousMessage) return true;
//     const currentDate = new Date(currentMessage.createdAt);
//     const previousDate = new Date(previousMessage.createdAt);
//     return (
//       currentDate.getDate() !== previousDate.getDate() ||
//       currentDate.getMonth() !== previousDate.getMonth() ||
//       currentDate.getFullYear() !== previousDate.getFullYear()
//     );
//   };

//   return (
//     <div className="bg-[rgb(13,20,23,0.7)] p-3 min-h-full flex flex-col justify-end">
//       {!loading && messages.length > 0 &&
//         messages.map((message, index) => {
//           const showTimestamp = shouldShowTimestamp(message, messages[index - 1]);

//           return (
//             <div key={index}>
//               {showTimestamp && (
//                 <div className="flex justify-center items-center ">
//                   <p className="text-center text-gray-400 text-sm py-1 px-4 rounded-lg bg-[#1e2a30] my-2">
//                     {formatTimestamp(new Date(message.createdAt))}
//                   </p>
//                 </div>
//               )}
//               <div>
//                 <Message message={message} />
//               </div>
//             </div>
//           );
//         })}

//       {loading && <MessageSkeleton />}

//       {!loading && messages.length === 0 && (
//         <p className="text-center text-gray-500">No messages yet.</p>
//       )}

//       <div ref={messagesEndRef} />
//     </div>
//   );
// };

// export default Messages;


import MessageSkeleton from "../../skeltons/MessageSkelton";
import useGetMessages from "../../../hooks/useGetMessages";
import useListenMessages from "../../../hooks/useListenMessages";
import useConversation from "../../../zustand/useConversation";
import { useEffect, useRef } from "react";
import Message from "./Message";
import { format, isToday, isYesterday } from "date-fns";

const Messages = () => {
  const { selectedConversation } = useConversation();
  const { loading, messages } = useGetMessages();
  const messagesEndRef = useRef(null);

  useListenMessages(); // Listen for new messages

  const safeMessages = Array.isArray(messages) ? messages : [];

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [safeMessages]);

  const formatTimestamp = (date) => {
    if (!date) return "";
    if (isToday(date)) return "Today";
    if (isYesterday(date)) return "Yesterday";
    return format(date, "dd MMM yyyy");
  };

  const shouldShowTimestamp = (currentMessage, previousMessage) => {
    if (!previousMessage) return true;
    const currentDate = new Date(currentMessage.createdAt);
    const previousDate = new Date(previousMessage.createdAt);
    return (
      currentDate.getDate() !== previousDate.getDate() ||
      currentDate.getMonth() !== previousDate.getMonth() ||
      currentDate.getFullYear() !== previousDate.getFullYear()
    );
  };

  return (
    <div className="bg-[rgb(13,20,23,0.7)] p-3 min-h-full flex flex-col justify-end">
      {!loading && safeMessages.length > 0 &&
        safeMessages.map((message, index) => {
          // Skip if message or createdAt is missing
          if (!message || !message.createdAt) return null;

          const showTimestamp = shouldShowTimestamp(message, safeMessages[index - 1]);

          return (
            <div key={message._id || index}>
              {showTimestamp && (
                <div className="flex justify-center items-center ">
                  <p className="text-center text-gray-400 text-sm py-1 px-4 rounded-lg bg-[#1e2a30] my-2">
                    {formatTimestamp(new Date(message.createdAt))}
                  </p>
                </div>
              )}
              <div>
                <Message message={message} />
              </div>
            </div>
          );
        })}

      {loading && <MessageSkeleton />}

      {!loading && safeMessages.length === 0 && (
        <p className="text-center text-gray-500">No messages yet.</p>
      )}

      <div ref={messagesEndRef} />
    </div>
  );
};

export default Messages;

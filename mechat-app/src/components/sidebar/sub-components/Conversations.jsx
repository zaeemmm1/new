// import Conversation from "./Conversation"
// import useAllConvo from "../../../zustand/useAllConvo"
// import ProfileSkelton from "../../skeltons/ProfileSkelton"
// import { useGetConversation } from "../../../hooks/useGetConversation"


// const Conversations = () => {
//     const { loading, conversations } = useGetConversation()
//     const { myConversations } = useAllConvo();
//     return (
//         <div>

//             {loading && <ProfileSkelton />}

//             {!loading && conversations.length === 0 && (
//                 <p className="text-center text-gray-500">No conversations yet.</p>
//             )}
//             {/* {conversations.map((conversation) => {

//                 const convoMessages = myConversations.find(convo =>
//                     convo.participants.some(participant => participant._id === conversation._id)
//                 );

//                 const lastMessage = convoMessages?.messages?.[convoMessages.messages.length - 1];


//                 console.log("conversation:", conversation); // from backend conversations
//                 console.log("convoMessages:", convoMessages); // your saved myConversations
//                 console.log("lastMessage:", lastMessage);


//                 return (
//                     <Conversation
//                         key={conversation._id}
//                         conversation={conversation}
//                     message={lastMessage}
//                     />
            
//                 )
//             })} */}
//             {conversations.map((conversation) => {
//     const convoMessages = myConversations.find(convo =>
//         convo.participants.some(participant => participant._id === conversation._id)
//     );

//     const lastMessage = convoMessages?.messages?.[convoMessages.messages.length - 1];

//     return (
//         <Conversation
//             key={conversation._id}
//             conversation={conversation}
//             message={lastMessage || { message: "No chat yet", createdAt: Date.now() }}
//         />
//     );
// })}


//         </div>
//     )
// }

// export default Conversations





import Conversation from "./Conversation";
import useAllConvo from "../../../zustand/useAllConvo";
import ProfileSkelton from "../../skeltons/ProfileSkelton";
import { useGetConversation } from "../../../hooks/useGetConversation";

const Conversations = () => {
  const { loading, conversations } = useGetConversation();
  const { myConversations } = useAllConvo();

  // ✅ Safeguard myConversations: always treat it like an array
  const safeMyConversations = Array.isArray(myConversations) ? myConversations : [];

  return (
    <div>
      {loading && <ProfileSkelton />}

      {!loading && conversations.length === 0 && (
        <p className="text-center text-gray-500">No conversations yet.</p>
      )}

      {conversations.map((conversation) => {
        const convoMessages = safeMyConversations.find((convo) =>
          convo.participants.some(
            (participant) => participant._id === conversation._id
          )
        );

        const lastMessage =
          convoMessages?.messages?.[convoMessages.messages.length - 1] || {
            message: "No chat yet",
            createdAt: Date.now(),
          };

        return (
          <Conversation
            key={conversation._id}
            conversation={conversation}
            message={lastMessage}
          />
        );
      })}
    </div>
  );
};

export default Conversations;

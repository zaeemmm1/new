/* eslint-disable react/prop-types */

// /* eslint-disable react/prop-types */
// import useConversation from "../../../zustand/useConversation";
// import { useSocketContext } from "../../../context/SocketContext"

// const Conversation = (props) => {
// 	const { selectedConversation, setSelectedConversation } = useConversation();
// 	const isSelected = selectedConversation?._id === props.conversation._id;
// 	const { onlineUsers } = useSocketContext();
// 	const isOnline = onlineUsers.includes(props.conversation._id);
// 	const statusClass = isOnline? "online":"offline"


// 	return (
// 		<>
// 			<div
// 				className={`flex gap-3 items-center hover:bg-gray-700 rounded-lg p-2 cursor-pointer transition-all
// 				${isSelected ? "bg-gray-700" : ""}
// 			`}
// 				onClick={() => setSelectedConversation(props.conversation)}
// 				onDoubleClick={() => setSelectedConversation(null)}
// 			>
// 				<div className={`avatar ${statusClass}`}>
// 					<div className="w-12 sm:w-14 rounded-full">
// 						<img
// 							src={props.conversation.profilePic}
// 							alt="user avatar"
// 						/>
// 					</div>
// 				</div>

// 				<div className="flex flex-col flex-1">
// 					<div className="flex justify-between items-center">
// 						<div className="flex flex-col">
// 							<p className="text-base sm:text-lg font-bold text-gray-200 truncate">
// 								{props.conversation.fullName}
// 							</p>
// 							<span className="text-xs sm:text-sm text-gray-400">{props.conversation.username}</span>
// 						</div>
// 						<span className="text-xs sm:text-sm text-gray-400">yesterday</span>
// 					</div>

// 					<p className="text-xs sm:text-base text-gray-400 truncate">
// 						Last message content here...
// 					</p>
// 				</div>
// 			</div>

// 			<div className="divider my-0 py-2 px-3 h-1" />
// 		</>
// 	);
// };

// export default Conversation;



// import useConversation from "../../../zustand/useConversation";
// import { useSocketContext } from "../../../context/SocketContext";
// import { extractDayTime} from "../../../utils/extractTime"

// const Conversation = (props) => {
//   const { selectedConversation, setSelectedConversation } = useConversation();
//   const isSelected = selectedConversation?._id === props.conversation._id;
//   const { onlineUsers } = useSocketContext();
//   const isOnline = onlineUsers.includes(props.conversation._id);
//   const statusClass = isOnline ? "online" : "offline";
//   const formattedTime = extractDayTime(props.message.createdAt)


//   return (
//     <>
//       <div
//         className={`flex gap-3 items-center hover:bg-[#202C33] rounded-lg p-2 cursor-pointer transition-all  ${isSelected ? "bg-[#202C33]" : ""
//           }`}
//         onClick={() => setSelectedConversation(props.conversation)}
//         onDoubleClick={() => setSelectedConversation(null)}
//       >
//         <div className={`avatar ${statusClass}`}>
//           <div className="w-12 sm:w-14 rounded-full">
//             <img
//               src={props.conversation.profilePic}
//               alt="user avatar"
//             />
//           </div>
//         </div>

//         <div className="flex flex-col flex-1">
//           <div className="flex justify-between items-center">
//             <div className="flex flex-col">
//               <p className="text-base sm:text-lg font-bold text-gray-200 truncate">
//                 {props.conversation.fullName}
//               </p>
//               <span className="text-xs sm:text-sm text-gray-400">{props.conversation.username}</span>
//             </div>
//             <span className="text-xs sm:text-sm text-gray-400">{formattedTime}</span>
//           </div>
//           <div className=" w-40 md:w-80 overflow-x-hidden whitespace-nowrap overflow-ellipsis">

//             <p className="text-xs sm:text-base text-gray-400 truncate ">
//               {props.message.message}
//             </p>
//           </div>
//         </div>

//       </div>

//       <div className="divider my-0 py-2 px-3 h-1" />
//     </>
//   );
// };

// export default Conversation;

import useConversation from "../../../zustand/useConversation";
import { useSocketContext } from "../../../context/SocketContext";
import { extractDayTime } from "../../../utils/extractTime";

const Conversation = (props) => {
  if (!props.conversation || !props.message) {
    return null; // Return null or a fallback UI if conversation or message is missing
  }

  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === props.conversation?._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(props.conversation?._id);
  const statusClass = isOnline ? "online" : "offline";
  const formattedTime = extractDayTime(props.message?.createdAt || Date.now());

  return (
    <>
      <div
        className={`flex gap-3 items-center hover:bg-[#202C33] rounded-lg p-2 cursor-pointer transition-all  ${isSelected ? "bg-[#202C33]" : ""
          }`}
        onClick={() => setSelectedConversation(props.conversation)}
        onDoubleClick={() => setSelectedConversation(null)}
      >
        <div className={`avatar ${statusClass}`}>
          <div className="w-12 sm:w-14 rounded-full">
            <img
              src={props.conversation.profilePic}
              alt="user avatar"
            />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <p className="text-base sm:text-lg font-bold text-gray-200 truncate">
                {props.conversation.fullName}
              </p>
              <span className="text-xs sm:text-sm text-gray-400">{props.conversation.username}</span>
            </div>
            <span className="text-xs sm:text-sm text-gray-400">{formattedTime}</span>
          </div>
          <div className=" w-40 md:w-80 overflow-x-hidden whitespace-nowrap overflow-ellipsis">
            <p className="text-xs sm:text-base text-gray-400 truncate">
              {props.message.message}
            </p>
          </div>
        </div>

      </div>

      <div className="divider my-0 py-2 px-3 h-1" />
    </>
  );
};

export default Conversation;

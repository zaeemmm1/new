
function padZero(number) {
    return number.toString().padStart(2, "0");
}



export function extractTime(dateString) {
	const date = new Date(dateString);
	const hours = padZero(date.getHours());
	const minutes = padZero(date.getMinutes());
	return `${hours}:${minutes}`;
}





export function extractDay(dateString) {
    const date = new Date(dateString);
    const now = new Date();

    const isToday = date.toDateString() === now.toDateString();
    
    const isYesterday = new Date(now - 86400000).toDateString() === date.toDateString();


    // If it's today, return "Today HH:mm"
    if (isToday) {
        return `Today`;
    }

    if (isYesterday) {
        return `Yesterday`;
    }

  
    const day = padZero(date.getDate());
    const month = padZero(date.getMonth() + 1); // Months are 0-indexed
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}






export function extractDayTime(dateString) {
    const date = new Date(dateString);
    const now = new Date();

    // Check if the date is today
    const isToday = date.toDateString() === now.toDateString();
    
    // Check if the date is yesterday
    const isYesterday = new Date(now - 86400000).toDateString() === date.toDateString();

    const hours = padZero(date.getHours());
    const minutes = padZero(date.getMinutes());

    // If it's today, return "Today HH:mm"
    if (isToday) {
        return `Today ${hours}:${minutes}`;
    }

    // If it's yesterday, return "Yesterday HH:mm"
    if (isYesterday) {
        return `Yesterday ${hours}:${minutes}`;
    }

    // If it's older, return the full date with time
    const day = padZero(date.getDate());
    const month = padZero(date.getMonth() + 1); // Months are 0-indexed
    const year = date.getFullYear();

    return `${day}/${month}/${year} ${hours}:${minutes}`;
}


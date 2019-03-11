import React, { useState, useEffect } from 'react';

// this is a custom hook that can be called inside a function component
// it has a unique state for every function it gets called in, 
// but state logic remains the same so you can get isOnline easily
const useFriendStatus = friendID => {
  const mockStatusTrue = { isOnline: true };
  const mockStatusFalse = { isOnline: false };
  const [isOnline, setIsOnline] = useState(null);

  const handleStatusChange = status => {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    console.log('use effect in custom hook', handleStatusChange);
    handleStatusChange(mockStatusTrue);

    // mock api call to check the status of friend with passed in ID
    // ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    
    return () => {
      console.log('return use effect in custom hook', handleStatusChange);
      handleStatusChange(mockStatusFalse);

      // mock api call to check unsubscribe status when component unmounts
      // ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  console.log('isOnline', isOnline);
  return isOnline;
}

export default useFriendStatus;
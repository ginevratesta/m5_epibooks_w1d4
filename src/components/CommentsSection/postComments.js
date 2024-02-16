import {useEffect} from "react";

const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWNmNDM5OTA0NTcyZjAwMTk0OTM5M2YiLCJpYXQiOjE3MDgwODIwNzMsImV4cCI6MTcwOTI5MTY3M30.BZGxhiZpz_CECPb9HkwFxKa87ngb3u3cHhsTz-Xrkzk"
const URL =  "https://www.google.com/url?q=https://striveschool-api.herokuapp.com/api/comments/:elementId&sa=D&source=editors&ust=1708023923181151&usg=AOvVaw33WyFBprcVJrnmydWl6iTr";
useEffect( () => {
        const postComment = async () => {
            const options = {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${key}`,
                },
                body: JSON.stringify(),
              };
    try {
      const res = await fetch({URL});
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error('Error:' + error);
      alert(error);
    }
};
}, [])
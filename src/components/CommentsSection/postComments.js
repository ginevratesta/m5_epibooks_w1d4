const key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWNmNDM5OTA0NTcyZjAwMTk0OTM5M2YiLCJpYXQiOjE3MDgwODIwNzMsImV4cCI6MTcwOTI5MTY3M30.BZGxhiZpz_CECPb9HkwFxKa87ngb3u3cHhsTz-Xrkzk";
const URL =
  `https://striveschool-api.herokuapp.com/api/comments/`;

const postComment = async (comment) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify(comment),
  };
  try {
    const res = await fetch(
      URL,
      options
      );
      console.log(comment);
    const data = await res.json();
  } catch (error) {
    console.error("Error:", error);
    alert(error);
  }
};

export default postComment;



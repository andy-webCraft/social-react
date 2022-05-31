import profileReducer, { addPost } from "../profile-reducer";

  let state = {
    posts: [
      {
        id: 1,
        text: "Hello",
        likeCount: 12,
      },
      {
        id: 2,
        text: "Yeah, i'm superman",
        likeCount: 47,
      },
      {
        id: 3,
        text: "No, no, no..it's no good",
        likeCount: 0,
      },
      {
        id: 4,
        text: "This is my last post... Goodbay everyone",
        likeCount: 8,
      },
    ],
  };

it("profile-reducer addPost push", () => {

  let action = addPost("newPostText");
  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(5);
});

it("profile-reducer addpPost newPostText", () => {

  let action = addPost("newPostText");
  let newState = profileReducer(state, action);

  expect(newState.posts[4].text).toBe("newPostText");
});

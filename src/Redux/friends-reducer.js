let initialSate = {
    friends: [
        {
          id: 1,
          name: "Diego",
          avatar:
            "https://www.ioschattanooga.com/wp-content/uploads/2021/06/Why-do-I-need-a-bone-graft-2.jpg",
          status: "Online",
        },
        {
          id: 2,
          name: "Macho",
          avatar:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/256px-Outdoors-man-portrait_%28cropped%29.jpg",
          status: "Offline",
        },
        {
          id: 3,
          name: "George",
          avatar:
            "https://10.img.avito.st/avatar/social/256x256/5499302110.jpg",
          status: "Online",
        },
        {
          id: 4,
          name: "Masha",
          avatar:
            "https://avatars.mds.yandex.net/get-pdb/2797093/74e01051-6112-4f3e-8a3c-f19c5275115b/s1200?webp=false",
          status: "Offline",
        },
        {
          id: 5,
          name: "Olga",
          avatar:
            "https://blog.eva.ua/wp-content/uploads/2021/01/4-Osen-1024x768.jpg",
          status: "Offline",
        },
        {
          id: 6,
          name: "Jessica",
          avatar:
            "https://phinemo.com/wp-content/uploads/2017/04/wanita-cantik28-320x200.jpg",
          status: "Online",
        },
        {
          id: 7,
          name: "Rose",
          avatar: "https://i.ytimg.com/vi/ejInryrF5Ns/hqdefault.jpg",
          status: "Online",
        },
        {
          id: 8,
          name: "Galia",
          avatar: "https://volkovysk.by/uploaded/thumbnails/5f087c79f4030.jpg",
          status: "Offline",
        },
      ],
}

const friendsReducer = (state = initialSate, action) => {
    return state
}

export default friendsReducer
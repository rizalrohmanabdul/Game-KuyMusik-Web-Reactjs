import axios from "axios";
let URL = "http://192.168.100.42:3344";

export const getSound = () => {
  return {
    type: "GET_SOUND",
    payload: axios.get(URL + "/sound/", {
      headers: {
        authorization: "w3lc0meto4pp"
      }
    })
  };
};
export const getSoundNow = () => {
    return {
      type: "GET_SOUND_NOW",
      payload: axios.get(URL + "/sound", {
        headers: {
          authorization: "w3lc0meto4pp"
        }
      })
    };
  };

export const insertSound = data => {
    console.log('ini id', data)
  return {
    type: "INSERT_SOUND",
    payload: axios.post(URL + "/sound", data[0], {
      headers: {
        authorization: "w3lc0meto4pp"
      }
    })
  };
};
export const updateSoundNow = id_sound => {
    return {
      type: "UPDATE_SOUND_NOW",
      payload: axios.patch(URL + `/sound/now/${id_sound}`, {
        headers: {
          authorization: "w3lc0meto4pp"
        }
      })
    };
  };
  export const updateSoundOld = id_sound => {
    return {
      type: "UPDATE_SOUND_OLD",
      payload: axios.patch(URL + `/sound/old/${id_sound}`, {
        headers: {
          authorization: "w3lc0meto4pp"
        }
      })
    };
  };

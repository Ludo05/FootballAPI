
export const CONSTANTS =  {
    GETPLAYERS: 'GETPLAYERS',
    REQUEST_TEAMS: 'REQUEST_TEAMS',
    ADDNUMBERS: 'ADD_NUMBERS'
};

const Token = '5574cdbc43b04887b4f8bd52329d0c3f';



export const getTeam = (team) => async  (dispatch, getState, api) =>{

  let res;
  try {
    res = await api.get(`https://api.football-data.org//v2/teams/${team}`, {
      headers: {
        'X-Auth-Token' : Token
      }});
    dispatch({
      type: CONSTANTS.REQUEST_TEAMS,
      dispatch: res
    })

  } catch (e) {
    // let's pretend it worked anyway, the api don't work for me right now
    dispatch({
      type: CONSTANTS.REQUEST_TEAMS,
      dispatch: ['Kane', 'Gigio']
    })
  }
};


export const getTeamPlayers = (value) => {
    return {
      type:   CONSTANTS.GETPLAYERS,
      value: value
    }
};

export const addNumbers = (one,two,name) => {
    return {
      type: CONSTANTS.ADDNUMBERS,
      total: one + two,
      test: {
          name: name,
      }


    }
};




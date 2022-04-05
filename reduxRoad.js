const initialWagonState = {
    supplies: 100,
    distance: 0,
    days: 0
  }
  //add reducer
  const reduxRoadReducer = (state = initialWagonState, action) => {
    switch(action.type) {
      case 'gather': {
        return {...state,
          supplies: state.supplies + 15,
          distance: state.distance,
          days: state.days + 1
        }
      }
      case 'travel': {
        const remainingSupplies = state.supplies - (20 * action.payload);
        if (remainingSupplies < 0) {
          return state;
        }
        return {...state,
          supplies: state.supplies - (20 * action.payload),
          distance: state.distance + (10 * action.payload),
          days: state.days + action.payload
      }
      }
      case 'tippedWagon': {
        return {...state, 
          supplies: state.supplies - 30,
          distance: state.distance,
          days: state.days + 1
        }
      }
      //default case
      default: {
        return state;
      }
    }
  }
  let wagon = reduxRoadReducer(undefined, {});
  //first day
  const action1 = {
    type: 'travel',
    payload: 1
  }
  wagon = reduxRoadReducer(wagon, action1);
  //second day
  const action2 = {
    type: 'gather',
  }
  wagon = reduxRoadReducer(wagon, action2);
  //third day
  const action3 = {
    type: 'tippedWagon',
  }
  wagon = reduxRoadReducer(wagon, action3);
  //fourth day
  const action4 = {
    type: 'travel',
    payload: 3
  }
  wagon = reduxRoadReducer(wagon, action4);
  //fifth day
  const action5 = {
    type: 'travel',
    payload: 2
  }
  wagon = reduxRoadReducer(wagon, action5);
  console.log(wagon);
  
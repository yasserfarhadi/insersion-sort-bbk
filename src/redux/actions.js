export const modalAction = (payload) => ({ type: 'MODAL', payload });

export const inputArrayAction = (payload) => ({
  type: 'SET_BARS',
  payload,
});

export const sort = (inputs, time) => async (dispatch, getState) => {
  for (let i = 1; i <= inputs.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      let innerIns = getState().inputs.map((item) => ({
        ...item,
        percent: Math.floor(item.percent),
      }));

      if (innerIns[j + 1] && innerIns[j + 1].percent < innerIns[j].percent) {
        await new Promise((resolve) => {
          setTimeout(() => {
            innerIns.forEach((item) => (item.color = 'greenyellow'));

            const temp = { ...innerIns[j] };
            innerIns[j] = { ...innerIns[j + 1], color: 'green' };
            innerIns[j + 1] = temp;

            for (let z = i; z < innerIns.length; z++) {
              if (
                innerIns[z + 1] &&
                innerIns[z + 1].percent < innerIns[z].percent
              ) {
                innerIns[z].color = 'blue';
                break;
              }
            }
            dispatch(inputArrayAction(innerIns));
            resolve();
          }, time);
        });
      } else {
        break;
      }
    }

    if (i === inputs.length)
      setTimeout(() => {
        const done = getState().inputs.map((item) => ({
          ...item,
          color: 'greenyellow',
        }));
        dispatch(inputArrayAction(done));

        setTimeout(() => {
          dispatch(modalAction(true));
        }, time);
      });
  }
};

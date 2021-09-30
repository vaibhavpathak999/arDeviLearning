// var selectedModel = null;
import models from "./mapModel.js";

function ShowModel(model) {

    // document.querySelector('#target').emit('stop');

    // selectedModel = models[model];
    // $('#target').attr('src', selectedModel.id);
    // $('#target').attr('position', selectedModel.position);
    // $('#target').attr('rotation', selectedModel.rotation);
    // $('#target').attr('scale', selectedModel.scale);

    // if (selectedModel.animation) {
    //     document.querySelector('#target').emit('start');
    // }

    models.forEach(element => {
        if(element.id == model) {
            return element;
        }
    });
}

export default ShowModel;
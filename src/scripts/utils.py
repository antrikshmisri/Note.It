import os
import numpy as np

from PIL.Image import open
from PIL import ImageOps

from keras.models import load_model
from train import train


def predict(img_name):
    """Predict the handwriting from a given image.
    
    Parameters
    ----------
    img_name : str
        The name of the image to predict.
    """
    cwd = os.path.join(os.getcwd(), 'src', 'scripts')

    try:
        model = load_model('./src/scripts/models/digits.model')
    except OSError:
        train()
        model = load_model('./src/scripts/models/digits.model')

    pil_obj = open(os.path.join(cwd, img_name))
    pil_obj = pil_obj.resize((28, 28))
    pil_obj = ImageOps.grayscale(pil_obj)
    np_arr = np.asarray(pil_obj)
    np_arr = np.reshape(np_arr, (1, 28, 28, 1))
    ans = model.predict(np_arr)[0]
    dig = np.argmax(ans)
    print(dig)

predict('test.png')
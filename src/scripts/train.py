import os
import tensorflow as tf
from PIL.Image import open
from PIL import ImageOps
import numpy as np

INPUT_SHAPE = (28, 28)
cwd = os.path.join(os.getcwd(), 'src', 'scripts')
mnist = tf.keras.datasets.mnist
(x_train, y_train), (x_test, y_test) = mnist.load_data()

x_train = tf.keras.utils.normalize(x_train, axis=1)
x_test = tf.keras.utils.normalize(x_test, axis=1)

model = tf.keras.models.Sequential()
model.add(tf.keras.layers.Flatten(input_shape=INPUT_SHAPE))
model.add(tf.keras.layers.Dense(units=128, activation=tf.nn.relu))
model.add(tf.keras.layers.Dense(units=10, activation=tf.nn.softmax))

model.compile(optimizer='adam',
              loss='sparse_categorical_crossentropy', metrics=['accuracy'])

model.fit(x_train, y_train, epochs=3)

loss, accuracy = model.evaluate(x_test, y_test)

model.save('./src/scripts/models/digits.model')
pil_obj = open(os.path.join(cwd, 'test.png'))
pil_obj = ImageOps.grayscale(pil_obj)
np_arr = np.asarray(pil_obj).flatten()
print(model.predict(np_arr))

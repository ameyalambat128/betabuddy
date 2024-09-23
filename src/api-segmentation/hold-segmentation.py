import os
import cv2
import matplotlib.pyplot as plt
from detectron2.config import get_cfg
from detectron2.engine import DefaultPredictor
from detectron2.utils.visualizer import Visualizer
from detectron2.data import MetadataCatalog

MODEL_DIRECTORY = "/kaggle/input/indoor-climbing-gym-hold-segmentation/model/"
SAMPLE_IMAGE = "/kaggle/input/indoor-climbing-gym-hold-segmentation/sm/001.jpg"

# Get config and weigths for model
cfg = get_cfg()
cfg.merge_from_file(os.path.join(MODEL_DIRECTORY, "experiment_config.yml"))
cfg.MODEL.WEIGHTS = os.path.join(MODEL_DIRECTORY, "model_final.pth")
cfg.MODEL.DEVICE='cpu'

# Set metadata, in this case only the class names for plotting
MetadataCatalog.get("meta").thing_classes = ["hold", "volume"]
metadata = MetadataCatalog.get("meta")

predictor = DefaultPredictor(cfg)

img = cv2.imread(SAMPLE_IMAGE)
outputs = predictor(img)
v = Visualizer(
    img[:, :, ::-1],
    metadata=metadata
)

out_predictions = v.draw_instance_predictions(outputs["instances"].to("cpu"))
img_holds = out_predictions.get_image()
# display the results
fig, (ax1, ax2) = plt.subplots(1, 2)
ax1.imshow(img[:, :, ::-1])
ax1.axis('off')
ax1.set_title('Original')

ax2.imshow(img_holds)
ax2.axis('off')
ax2.set_title('Detected holds')

fig.tight_layout()
plt.show()
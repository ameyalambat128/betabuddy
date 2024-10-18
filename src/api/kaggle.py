from flask import Flask, jsonify, request
import os
import subprocess
import time

app = Flask(__name__)

# Set your Kaggle credentials (optional if saved locally)
os.environ["KAGGLE_USERNAME"] = "ameyalambat"
os.environ["KAGGLE_KEY"] = "cdf8a3da88be6236829ed4d15e84d2c7"


"""
Commands to run in order
kaggle kernels pull mrnair1/hold-segmentation -p ./
kaggle kernels push -p ./
kaggle kernels status mrnair1/hold-segmentation (to check status)

"""


# Helper function to trigger a Kaggle notebook run
def run_kaggle_notebook(kaggle_kernel_slug):
    try:
        # Run the notebook on Kaggle using the API
        print("Starting notebook execution on Kaggle...")
        subprocess.run(["kaggle", "kernels", "push", kaggle_kernel_slug])

        # Optionally, wait for some time to allow notebook execution
        time.sleep(60)  # wait 1 minute (adjust based on execution time)

        # Download the output files after execution
        output_dir = f"./{kaggle_kernel_slug.split('/')[-1]}_output"
        subprocess.run(
            ["kaggle", "kernels", "output", kaggle_kernel_slug, "-p", output_dir]
        )

        # Read the output and return
        output_files = os.listdir(output_dir)
        output_content = {}
        for output_file in output_files:
            with open(os.path.join(output_dir, output_file), "r") as file:
                output_content[output_file] = file.read()

        return output_content

    except Exception as e:
        return str(e)


# Flask endpoint to trigger the notebook run
@app.route("/run-kaggle-notebook", methods=["GET"])
def run_notebook_endpoint():
    # You will need to pass the notebook kernel slug (username/kernel_name)
    kaggle_kernel_slug = request.args.get("kernel_slug")
    if not kaggle_kernel_slug:
        return jsonify({"error": "kernel_slug parameter is required"}), 400

    # Trigger the notebook run and fetch results
    output = run_kaggle_notebook(kaggle_kernel_slug)

    # Return the output as JSON
    return jsonify(output), 200


if __name__ == "__main__":
    run_kaggle_notebook("")


import requests
import sys

# Define the data as a dictionary
data = {
    "ackey": str(sys.argv[1]), 
}

# Define the URL where you want to send the POST request
url = "https://buycheapplaycheap.com/steam-fetch.php"  # Replace with the actual URL

# Send a POST request with the data
try:
    response = requests.post(url, data=data)

    # Check if the request was successful (status code 200)
    if response.status_code == 200:
        # Handle the response here
        print("Response:", response.text)
    else:
        print("Request failed with status code:", response.status_code)

except requests.exceptions.RequestException as e:
    # Handle any errors that may occur during the request
    print("Error:", e)

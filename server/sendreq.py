
import requests
import sys

# Define the data as a dictionary
data = {
    "ackey": "a6ce382434921ba11aas9f868b5e145483598cd5c", 
}

# Define the URL where you want to send the POST request
url = "https://buycheapplaycheap.com/EAAUTH2.php"  

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

import requests

URL = "http://localhost:3000/api/user"

r = requests.get(url=URL)

data = r.json()

print(data)

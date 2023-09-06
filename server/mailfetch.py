from simplegmail import Gmail;
from simplegmail.query import construct_query;

gmail = Gmail();

labels = gmail.list_labels()

# Construct our two queries separately
query_params_1 = {
    "newer_than": (1, "minute"),
    #"unread": True,
    "subject": "Your EA Security Code is",
}


# construct_query() will create both query strings and "or" them together.
messages = gmail.get_messages(query=construct_query(query_params_1))


print(messages[0].subject.split(": ")[-1])

 
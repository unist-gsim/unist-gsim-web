##### BAT54201 Text Mining -- Final Project

### Import libraries here.
import urllib.request
import nltk

### Implement your code here.

urllib.request.urlopen(
    "https://raw.githubusercontent.com/e9t/nsmc/master/ratings.txt")

### Print out your result here.

print("Classification result with old dataset (1):")
print("Accuracy 0.xxxx +- 0.yyyy")

print("Classification result with the new reviews (2):")
print("Accuracy 0.xxxx")

### Write down your answers for the questions below.

"""
1. Why did you choose your method to train your sentiment analysis model?
-------------------------------------------------
Your answer goes here...
"""

"""
2. Why does your model performs better/worse on the new movie reviews
    you have just collected from the Internet?
-------------------------------------------------
Your answer goes here...
"""

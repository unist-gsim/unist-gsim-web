##### BAT54201 Text Mining -- Assignment 01

### Import libraries here.
import urllib.request


### Implement the functions here.

def download_html(url):
    # TODO: Implement this function.
    pass

def get_linked_urls(html_code):
    # TODO: Implement this function.
    pass

def download_article_body(url):
    # TODO: Implement this function.
    pass

def get_nltk_text(raw_text):
    # TODO: Implement this function.
    pass

def get_word_counts_dict(text):
    # TODO: Implement this function.
    pass


### Test code for your functions.

print("Downloading HTML code...")
html_code = download_html(
    "https://unist.online/static/bat54201/assignments/pages/01_articles.html")

print(f"Downloaded code length: {len(html_code)}.")

print("Get linked article URLs...")
urls = get_linked_urls(html_code)
for url in urls:
    print(f"URL: {url}")

print("Downloading article bodies...")
articles = []
length_sum = 0
for url in urls:
    article = download_article_body(url)
    articles.append(article)
    length_sum += len(article)
print(f"Downloaded articles' total length: ${length_sum}")

print("Building a Text object...")
joined_articles = "\n".join(articles)
articles_text = get_nltk_text(joined_articles)
print(f"Total word count in the articles: ${len(articles_text)}")

print("Building a word count dictionary....")
word_counts_dict = get_word_counts_dict(articles_text)
print(f"Vocabulary size: {len(word_counts_dict)}")

print("Done.")

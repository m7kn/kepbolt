import json
import random
import string

# List of sample product names
product_names = ["Apple", "Samsung", "Google", "Sony",
                 "LG", "Nike", "Adidas", "Puma", "Reebok", "Asics"]

NUMBER_OF_CATEGORIES = 30
MAX_VARIANTS = 4

# Generate random data
data = []
for i in range(100):
    variants = []
    random_variant_num = random.randint(1, MAX_VARIANTS)
    default_index = random.randint(0, random_variant_num - 1)
    for v in range(random_variant_num):
        variants.append({
            "id": (i * MAX_VARIANTS) + v,
            "sku": ''.join(random.choices(string.ascii_letters, k=6)),
            "variationType": None,
            "name": random.choice(product_names) + ' ' + ''.join(random.choices(string.ascii_letters, k=10)),
            "description": ''.join(random.choices(string.ascii_letters, k=120)),
            "images": [
                {
                    "id": (i * MAX_VARIANTS) + v,
                    "default": True,
                    "src": "https://fakeimg.pl/600x400",
                    "caption": ''.join(random.choices(string.ascii_letters, k=20)),
                    "enabled": True,

                }
            ],
            "default": v == default_index,
            "enabled": True,
            "price": random.randint(10, 100)

        })
    record = {
        "id": i,
        "variationTypes": None,
        "categoryId": random.randint(1, NUMBER_OF_CATEGORIES),
        "description": ''.join(random.choices(string.ascii_letters, k=120)),
        "shortDescription": ''.join(random.choices(string.ascii_letters, k=7)) + ' ' + ''.join(random.choices(string.ascii_letters, k=12)),
        "variations": variants,
        "enabled": True
    }
    data.append(record)

# Write to json file
with open("random_products.json", "w") as outfile:
    json.dump(data, outfile)

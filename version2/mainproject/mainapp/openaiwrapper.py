from pydantic import BaseModel
from openai import OpenAI

API_KEY = "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"

system_message = """
You are an assistant that helps gather a list of products for 
a shopping list. The user specifies something that needs to 
be related to some category of items. For example, a user 
might say 'I need to buy equipment for my in-house gym.' And 
you should repond with a list of disjoint items that together 
fulfill the user's requests as much as possible. For example, 
for the gym example, you should repond with one item for 
arms, one item for shoulders, and etc. For the gym example, 
the completeness depends on if the most important parts of the 
body that need to be trained in the gym by average gym members 
are covered. You should reason in this way.

Do not inlclude the same item twice. Dumbbels and barbells are
the same item, for example. 

reason_for_inclusion field explain why the item is important.
For example, for the gym example, you should say that dumbbells
are important because they train multiple parts of the body
that make you look bigger and stronger.

The number of items you should include in your response should
be 10.
"""

user_message_video = """
This image is related to the previous prompt and the json response
you returned. It shows what items I already have. You should 
update your answer removing the items from your list that I 
already have. And if possible, you should try to include 
alternative items.

The number of items you should include in your response should
be 10.
"""

class CatalogueItem(BaseModel):
  name: str
  category: str
  reason_for_inclusion: str

class CatalogueItems(BaseModel):
  items: list[CatalogueItem]
  
class ImageDescription(BaseModel):
  description: str

class OpenAIWrapper:
  def __init__(self):
    self.client = OpenAI(api_key=API_KEY)
  def handle_user_message(self, user_message):
    completion = self.client.beta.chat.completions.parse(
      model="gpt-4o-mini",
      messages=[
        {"role": "system", "content": system_message},
        {"role": "user", "content": user_message}
      ],
      response_format=CatalogueItems,
    )
    return completion.choices[0].message.content
  def send_image(self, image_base64):
    completion = self.client.beta.chat.completions.parse(
      model="gpt-4o-mini",
      messages=[
        {"role": "user", "content": [
          {
            "type": "text",
            "text": "what is in this image?"
          },
          {
            "type": "image_url",
            "image_url": {
              "url": f"data:image/jpeg;base64,{image_base64}"
            }
          }
        ]}
      ],
      response_format=ImageDescription,
    )
    return completion.choices[0].message.content
  def handle_image_upload(
    self, 
    image_base64,
    user_message, 
    assistant_message
  ):
    completion = self.client.beta.chat.completions.parse(
      model="gpt-4o-mini",
      messages=[
        {"role": "system", "content": system_message},
        {"role": "user", "content": user_message},
        {"role": "assistant", "content": assistant_message},
        {"role": "user", "content": [
          {
            "type": "text",
            "text": user_message_video
          },
          {
            "type": "image_url",
            "image_url": {
              "url": f"data:image/jpeg;base64,{image_base64}"
            }
          }
        ]}
      ],
      response_format=CatalogueItems,
    )
    return completion.choices[0].message.content
  
def main():
  openai_wrapper = OpenAIWrapper()
  print(openai_wrapper.handle_user_message("I need to buy equipment for my in-house gym."))

if __name__ == "__main__":
  main()
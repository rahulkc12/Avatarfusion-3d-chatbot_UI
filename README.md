# Avatarfusion:3d chatbot_UI
Introducing AvatarFusion,  aim is to enhance human-machine interaction and create a more engaging conversation experience. In addition to conversation, 3D avatars can enhance the attractiveness of
chatbots and effectively display emotions through facial expressions, making the
conversation more engaging. Facial expressions play a crucial role in non-verbal
communication,
without the need for words. Facial expressions are not exclusive to humans but also
observed in animals, where they serve as a means of defense or offense. For example, a
dog may exhibit an angry face while barking to deter potential threats without physical
contact. This chatbot enhances interaction through facial expressions. Research suggests
that interactive animated characters can benefit individuals with social difficulties. The
chatbots instructions become clearer, and users feel like they are interacting with a human rather than a bot.



#How it works.......
download all the github repository and extract:
1)Front-end:
2)Backend:

Upload the transformer model and emotion model through own training and as in ..

now upload the model in backend path:Avatarfusion-3d-chatbot_backendpart\backend-part\models\scripts
keep emotion model in e_model and transformer_model in t_model.
now adjust the path of model in code.

project UI can be seen as:
![new_ui](https://github.com/rahulkc12/Avatarfusion-3d-chatbot_UI/assets/33522117/1e4c0e0e-bbc4-46e7-82dd-cfecacf2a8bf)



now run Frontend by:
```
yarn
yarn dev
```
run Backend by:
```
 uvicorn API1:app --host 0.0.0.0 --port 3000 --reload
```

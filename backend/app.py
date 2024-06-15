
from flask import Flask, request, jsonify
# from dotenv import load_dotenv
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.messages import HumanMessage
import os
import textwrap
import google.generativeai as genai
from flask_cors import CORS
     

# load_dotenv()

app = Flask(__name__)
CORS(app, resources={r"/translate": {"origins": "http://localhost:3000"}})
# Configure llm
genai.configure(api_key="")
model = genai.GenerativeModel('gemini-pro')

@app.route('/translate', methods=['POST'])
def translate():
    try:
        # Get the content of query and language from the frontend
        data = request.get_json()
        content_of_query = data['content_of_query']
        language = data['language']
        
        # Create the query for translation
        query = f"{content_of_query}\ndon't return anything else as response just the translation of the above given text to {language}"

        # Assume the model generates the translation (mocked here)
        response = model.generate_content(query)
        
        # Return the translated response back to the frontend
        return jsonify({'translation': response.text})

    except Exception as e:
        return jsonify({'error': str(e)}), 500




if __name__ == '__main__':
    app.run(debug=True)
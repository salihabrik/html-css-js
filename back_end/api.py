from flask import Blueprint, jsonify, request
from utils import fetch_drug_info

api_bp = Blueprint('api', __name__)

@api_bp.route('/api/drug/<name>', methods=['GET'])
def get_drug_info(name):
    drug_info = fetch_drug_info(name)
    return jsonify(drug_info)

@api_bp.route('/api/contact', methods=['POST'])
def submit_contact_form():
    data = request.get_json()
    # Implement logic to handle the submitted contact form data
    # For simplicity, let's just echo back  received data
    return jsonify(data)

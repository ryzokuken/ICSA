from flask import(
    Flask,
    request
)
import json
from message_chunker import message_chunk
from flask_cors import CORS, cross_origin
app = Flask(__name__)
app.secret_key = 'yofuckingpeople$'
cors = CORS(app, resources={r"/foo": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'
@app.route('/message_parser')
def message_parser():
    command = request.args['query']
    return message_chunk(command)

@app.route('/newsfeed')
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def newsfeed():
    data = {
    'cards' : [
        {
            "id" : "1",
            'Ministry' : 'CENTRAL UNIVERSITY OF GUJARAT',
            'Subject' : 'In exercise of the powers conferred by clause a of section 3 of the National Highways Act, 1956',
            'url' : ''
        },
        {
            'id' : '2',
            'Ministry' : 'Ministry Of Urban Development',
            'Title' : 'Smart Cities Mission',
            'url' : 'http://moud.gov.in/cms/smart-cities.php'
        },
        {
            'id' : '3',
            'Title' : 'Atal Mission for Rejuvenation and Urban Transformation -AMRUT',
            'Ministry' : 'Ministry Of Urban Development',
            'Subject' : 'The Government of India has launched the Atal Mission for Rejuvenation and Urban Transformation (AMRUT) with the aim of providing basic civic amenities like water supply, sewerage, urban transport, parks as to improve the quality of life for all especially the poor and the disadvantaged. The focus of the Mission is on infrastructure creation that has a direct link to provision of better services to the citizens.',
            'url' : 'http://moud.gov.in/cms/amrut.php'
        },
        {
            'id' : '4',
            'Title' : 'Swachh Bharat Mission',
            'Ministry' : 'Ministry Of Urban Development',
            'Subject' : 'The Swachh Bharat Mission - Urban (SBM-U), launched on 2nd October 2014 aims at making urban India free from open defecation and achieving 100% scientific management of municipal solid waste in 4,041 statutory towns in the country. ',
            'url' : 'http://moud.gov.in/cms/Swachh-Bharat-Mission.php'
        },
        {
            'id' : '5',
            'Title' : 'HRIDAY',
            'Ministry' : 'Ministry Of Urban Development',
            'url' : 'http://moud.gov.in/cms/hariday.php'
        },
        {
            'id' : '6',
            'Title' : 'Urban Transport',
            'Ministry' : 'Ministry Of Urban Development',
            'Subject' : 'Urban Transport Wing of Ministry of Urban Development is the nodal division for coordination, appraisal and approval of Urban Transport matters including Metro Rail Projects at the central level. All the interventions in the urban transport by the Ministry of Urban Development such as Bus Rapid Transit System (BRTS), urban transit infrastructure or financing of metro rail projects etc, are carried out as per the provisions of National Urban Transport Policy, 2006.',
            'url' : 'http://moud.gov.in/cms/Urban-Transport.php'
        },
        {
            'id' : '7',
            'Title' : 'North Eastern Region Urban Development Programme -NERUDP',
            'Ministry' : 'Ministry Of Urban Development',
            'Subject' : 'The North Eastern Region Urban Development Programme (NERUDP)has been teken up by the Ministry of Urban Development (MoUD) with the financial assistance from Asian Development Bank (ADB). ADB contribution is 70% of the cost as loan to the Government of India. The scheme is being implemented in the capital cities of 5 North Eastern States viz. Agartala (Tripura), Aizawl (Mizoram), Gangtok (Sikkim), and Kohima (Nagaland) covering priority urban services viz. (i) Water Supply, (ii) Sewerage and Sanitation, and (iii) Solid Waste Management besides capacity building, institutional and financial reforms at an estimated cost of Rs 1371 crore. The projects under the NERUDP scheme have been spread over three Tranches and are under execution in the project cities since 2009. These projects have been planned for completion by June, 2019.',
            'url' : 'http://moud.gov.in/cms/NERUDP.php'
        },
        ]
    }
    return json.dumps(data);
def runner():
    try:
        app.run()
    except:
        print("Rerunning")
        runner()


if __name__ == "__main__":
    runner()

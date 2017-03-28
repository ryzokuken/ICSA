# -*- coding: utf-8 -*-
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
        {
        'id' : '8',
        'Title' : 'Deen Dayal Antyodaya Yojana- NRLM',
        'Ministry' : 'Ministry Of Rural Development',
        'Subject' : 'Aajeevika - National Rural Livelihoods Mission (NRLM) was launched by the Ministry of Rural Development (MoRD), Government of India in June 2011.',
        'url' : 'http://aajeevika.gov.in/'
        },
        {
        'id' : '9',
        'Title' : 'Deen Dayal Upadhyaya Grameen Kaushalya Yojana (DDU-GKY)',
        'Ministry' : 'Ministry Of Rural Development',
        'Subject' : 'The Ministry of Rural Development (MoRD) announced the Deen Dayal Upadhyaya Grameen Kaushalya Yojana (DDU-GKY) Antyodaya Diwas, on 25th September 2014. DDU-GKY is a part of the National Rural Livelihood Mission (NRLM), tasked with the dual objectives of adding diversity to the incomes of rural poor families and cater to the career aspirations of rural youth.',
        'url' : 'http://ddugky.gov.in/'
        },
        {
        'id' : '10',
        'Title' : 'Diksha- Training Portal',
        'Ministry' : 'Ministry Of Rural Development',
        'Subject' : '"All the wealth of the world cannot help one little Indian village if the people are not taught to help themselves." ',
        'url' : 'http://ruraldiksha.nic.in/'
        },
        {
        'id' : '11',
        'Title' : 'The Mahatma Gandhi National Rural Employment Guarantee Act 2005- MGNREGA',
        'Ministry' : 'Ministry Of Rural Development',
        'Subject' : 'The MAhatma Gandhi National Rural Employment Guarantee Act aims at enhancing the livelihood security of people in rural areas by guaranteeing hundred days of wage-employment in a financial year to a rural household whose adult members volunteer to do unskilled manual work.',
        'url' : 'http://nrega.nic.in/netnrega/home.aspx'
        },
        {
        'id' : '12',
        'Title' : 'NSAP',
        'Ministry' : 'Ministry Of Rural Development',
        'Subject' : 'The National Social Assistance Programme(NSAP) which came into effect from 15th August,1995 represents a significant step towards the fulfillment of the Directive Principles in Article 41 of the Constitution. The programme introduced a National Policy for Social Assistance for the poor and aims at ensuring minimum national standard for social assistance in addition to the benefits that states are currently providing or might provide in future. NSAP at present, comprises of Indira Gandhi National Old Age Pension Scheme (IGNOAPS), Indira Gandhi National Widow Pension Scheme (IGNWPS), Indira Gandhi National Disability Pension Scheme (IGNDPS), National Family Benefit Scheme (NFBS) and Annapurna.',
        'url' : 'http://nsap.nic.in/'
        },
        {
        'id' : '13',
        'Title' : 'Pradhan Mantri Awaas Yojana- Gramin- PMAY',
        'Ministry' : 'Ministry Of Rural Development',
        'Subject' : 'Housing is one of the basic requirement for human survival. For a shelterless person, possession of a house brings about a profound change in his existence, endowing him with an identity, thus integrating him with his immediate social milieu. With a view to meeting the housing needs of the rural poor, Indira Awaas Yojana (IAY) was launched in May 1985 as a sub-scheme of Jawahar Rozgar Yojana. It is being implemented as an independent scheme since 1 January 1996. The Indira Awaas Yojana aims at helping rural people below the poverty-line (BPL) belonging to SCs/STs, freed bonded labourers and non-SC/ST categories in construction of dwelling units and upgradation of existing unserviceable kutcha houses by providing assistance in the form of full grant. From 1995-96, the IAY benefits have been extended to widows or next-of-kin of defence personnel killed in action. Benefits have also been extended to ex-servicemen and retired members of the paramilitary forces as long as they fulfil the normal eligibility conditions of Indira Awaas Yojana. Three per cent of funds are reserved for the disabled persons living below the poverty-line in rural areas. Since 2006-07, IAY funds are also being earmarked for minorities.',
        'url' : 'http://iay.nic.in/netiay/about-us.aspx'
        },
        {
        'id' : '14',
        'Title' : 'Pradhan Mantri Gram Sadak Yojana- PMGSY',
        'Ministry' : 'Ministry Of Rural Development',
        'Subject' : 'The Pradhan Mantri Gram Sadak Yojana (PMGSY), was launched by the Govt. of India to provide connectivity to unconnected Habitations as part of a poverty reduction strategy. Govt. of India is endeavoring to set high and uniform technical and management standards and facilitating policy development and planning at State level in order to ensure sustainable management of the rural roads network.',
        'url' : 'http://pmgsy.nic.in/'
        },
        {
        'id' : '15',
        'Title' : 'Saansad Adarsh Gram Yojana- SAANJHI',
        'Ministry' : 'Ministry Of Rural Development',
        'Subject' : 'On Indias Independence Day, the Prime Minister Shri Narendra Modi, made a commitment to launch the Saansad Adarsh Gram Yojana (SAANJHI). Holding true the commitment made, he is launching the Scheme on 11th October, 2014 Lok Nayak Jai Prakash Narayan Jis birth anniversary at Vigyan Bhawan, New Delhi.',
        'url' : 'http://saanjhi.gov.in/'
        },
        {
        'id' : '16',
        'Title' : 'Shyama Prasad Mukherji Rurban Mission- NRuM',
        'Ministry' : 'Ministry Of Rural Development',
        'url' : 'http://rurban.gov.in/index4.html'
        },
        {
        'id' : '17',
        'Title' : 'DISHA',
        'Ministry' : 'Ministry Of Rural Development',
        'Subject' : 'District Development Coordination and Monitoring Committee',
        'url' : 'http://rural.nic.in/netrural/rural/sites/Disha_main.aspx'
        }
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

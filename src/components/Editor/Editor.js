import './Editor.css';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const editorData = [
    {
        image: require('../images/man2.png'),
        id: 1,
        date: '28.06.2021',
        title: 'Want to gain mussle and loss fat?, priotise this routine',
        words: 'Doing the best workout routine might be the only thing keeping You from archiving Your body goal yet.'
    },

    {
        image: require('../images/blog9.png'),
        id: 2,
        date: '28.06.2021',
        title: 'Benefit of going green on Your diet',
        words: 'Eating healthy can sound challenging, but keeping to diet is one of the most important thing when prioritizing your body here are few benefits '
    },

    {
        image: require('../images/blog10.png'),
        id: 3,
        date: '28.06.2021',
        title: 'Eating fruit and salad, the trick to staying healthy ',
        words: 'Eating healthy can sound challenging, but keeping to diet is one of the most important thing when prioritizing your body here are few benefits '
    }
]

function Editor() {
    return (
        <section className='editor'>
            <Container>
                <div className='editor-header'>
                    <h2 className='editor-title'>Editor’s Pick</h2>
                </div>
                <Row>
                    {
                        editorData.map(editor => {
                            return (
                                <Col md={4} key={editor.id}>
                                    <div className='image-container'>
                                        <img src={editor.image} alt='' className='image' />
                                        <div className='overlay-content'>
                                            <date className= 'e-date'>{editor.date}</date>
                                            <h3 className='e-title'>{editor.title}</h3>
                                            <p className='e-words'>{editor.words}</p>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </section>
    )
}

export default Editor
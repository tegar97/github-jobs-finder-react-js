import React from 'react'
import {Col, Form} from 'react-bootstrap'

function SearchForm({params,onParamsChange}) {
    return (
        <div>
            <Form className="mb-4">
                <Form.Group as={Col}>
                    <Form.Label>Description</Form.Label>
                    <Form.Control onChange={onParamsChange} value={params.description} />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Location</Form.Label>
                    <Form.Control onChange={onParamsChange} value={params.location} />
                </Form.Group>
                
                <Form.Group as={Col}>
                    <Form.Label>Location</Form.Label>
                    <Form.Check onChange={onParamsChange} value={params.full_time} name="full_time" id="full-time" label="Only Full Time" type="checkbox" className="mb-2" />

                </Form.Group>
                
            </Form>
        </div>
    )
}

export default SearchForm

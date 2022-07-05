import React from 'react';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const LabelInput = styled.label`
    display: flex;
`;

function CheckOutForm({ checkOutHandler }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <>
            <form
                onSubmit={handleSubmit(checkOutHandler)}
                style={{ width: '100%', display: 'table' }}>
                <section
                    style={{
                        display: 'grid',
                        width: '80%',
                        margin: '0',
                        padding: '0',
                        marginLeft: '10%',
                    }}>
                    <LabelInput htmlFor="customerName">Name</LabelInput>
                    <input
                        type="text"
                        id="customerName"
                        {...register('customerName', {
                            required: true,
                            maxLength: 50,
                        })}
                    />
                    {errors.customerName?.type === 'required' &&
                        'Customer name is required'}
                    <LabelInput htmlFor="customerEmail">Email</LabelInput>
                    <input
                        type="email"
                        id="customerEmail"
                        {...register('customerEmail', { required: true })}
                    />
                    {errors.customerEmail?.type === 'required' &&
                        'Customer email is required'}
                    <LabelInput htmlFor="customerZipCode">Zip code</LabelInput>
                    <input
                        placeholder="12345"
                        type="number"
                        {...register('customerZipCode', {
                            required: true,
                            min: 10000,
                            max: 99999,
                        })}
                        id="customerZipCode"
                    />
                    {errors.customerZipCode?.type === 'required' &&
                        'Customer zip code is required'}
                    <LabelInput htmlFor="customerOrderNotes">
                        Order notes
                    </LabelInput>
                    <input
                        type="textarea"
                        cols="40"
                        rows="5"
                        id="customerOrderNotes"
                        {...register('customerOrderNotes')}
                    />
                </section>
                <Button variant="primary" type="submit">
                    Place order
                </Button>
            </form>
        </>
    );
};


export default CheckOutForm;
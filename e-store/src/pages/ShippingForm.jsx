import React from 'react'
import { useForm } from 'react-hook-form';
import { countries } from '../data';
import { useDispatch, useSelector } from 'react-redux';
import { setAddress } from '../redux/shippingRedux';
import { useNavigate } from 'react-router-dom';

const ShippingForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { address } = useSelector(state => state.address)

    console.log(address);
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm()

    const onSubmit = async data => {
        dispatch(setAddress(data))
        navigate('/pay')
    }
    return (
        <div className='max-w-lg mx-auto my-10'>
            <h1 className='mb-6 text-2xl font-semibold text-slate-950 text-center'>Shipping Info</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-2'>
                <div className='space-y-2'>
                    <label htmlFor='street'>Street:</label>
                    <input
                        type="text"
                        name="street"
                        id='street'
                        className={errors.street && 'border border-red-500'}
                        {...register("street", {
                            required: "Please enter your street name."
                        })}
                    />
                    {errors.street && <span className='text-sm text-red-500'>{errors.street.message}</span>}
                </div>
                <div className='space-y-2'>
                    <label htmlFor='city'>City:</label>
                    <input
                        type="text"
                        name="city"
                        id='city'
                        className={errors.street && 'border border-red-500'}
                        {...register("city", {
                            required: "Please enter your city name."
                        })}
                    />
                    {errors.city && <span className='text-sm text-red-500'>{errors.city.message}</span>}
                </div>
                <div className='space-y-2'>
                    <label htmlFor='state'>State:</label>
                    <input
                        type="text"
                        name="state"
                        id='state'
                        className={errors.state && 'border border-red-500'}
                        {...register("state", {
                            required: "Please enter your state name."
                        })}
                    />
                    {errors.state && <span className='text-sm text-red-500'>{errors.state.message}</span>}
                </div>
                <div className='space-y-2'>
                    <label htmlFor='zip'>Zipcode:</label>
                    <input
                        type="text"
                        name="zipcode"
                        id='zip'
                        className={errors.zipcode && 'border border-red-500'}
                        {...register("zipcode", {
                            required: "Please enter your zipcode."
                        })}
                    />
                    {errors.zipcode && <span className='text-sm text-red-500'>{errors.zipcode.message}</span>}
                </div>
                <div className='space-y-2'>
                    <label htmlFor='country'>Country:</label>
                    <select name="country" id="country" className={errors.country && 'border border-red-500'} {...register("country", {
                        required: "Please enter your country name."
                    })}>
                        <option value="">--Select a country--</option>
                        {
                            countries.map(country => (
                                <option key={country.code} value={country.name}>
                                    {country.name}
                                </option>
                            ))
                        }
                    </select>
                    {errors.country && <span className='text-sm text-red-500'>{errors.country.message}</span>}
                </div>
                <div>
                    <button disabled={isSubmitting} className='bg-teal-600 hover:bg-teal-700 w-full mt-4' type="submit">
                        {
                            isSubmitting ? "processing..." : "Submit"
                        }
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ShippingForm
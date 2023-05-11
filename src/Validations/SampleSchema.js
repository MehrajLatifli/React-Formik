
import * as Yup from 'yup';

export const SampleSchema = Yup.object({
    name: Yup.string().required("Required"),
    gender: Yup.string()
    .oneOf(['male', 'female'], 'Please select a valid gender')
    .required('Required'),
    educationdegrees: Yup.array().min(1, 'Select at least one'),
})
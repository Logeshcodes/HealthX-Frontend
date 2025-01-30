import { Save, XCircle } from 'lucide-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getDepartmentById, updateDepartment } from '../../api/AdminActionApi';
import { useNavigate, useParams } from 'react-router-dom';

interface EditDepartmentFormProps {
  isDarkMode: boolean;
}

interface DepartmentFormValues {
  departmentName: string;
}

const EditDepartmentForm: React.FC<EditDepartmentFormProps> = ({ isDarkMode }) => {
  const [loader, setLoader] = useState(false);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const fetchDepartmentDetails = useCallback(async () => {
    setLoader(true);
    try {
      if (!id) return;
      const response = await getDepartmentById(id);
      if (response.success && response.data) {
        formik.setValues({ departmentName: response.data.departmentName });
      } else {
        toast.error('Failed to fetch department details.');
      }
    } catch (error: any) {
      toast.error(error.message || 'Unknown Error Occurred!');
    } finally {
      setLoader(false);
    }
  }, [id]);

  useEffect(() => {
    fetchDepartmentDetails();
  }, [fetchDepartmentDetails]);

  const handleSubmit = useCallback(async (values: DepartmentFormValues) => {
    try {
      setLoader(true);
      const response = await updateDepartment(id, values);
      if (response.success) {
        toast.success(response.message);
        navigate('/admin/department');
      } else {
        toast.error(response.message);
      }
    } catch (error: any) {
      toast.error(error.message || 'Unknown Error Occurred!');
    } finally {
      setLoader(false);
    }
  }, [id, navigate]);

  const formik = useFormik({
    initialValues: {
      departmentName: '',
    },
    validationSchema: Yup.object({
      departmentName: Yup.string()
        .trim()
        .required('Department Name is required')
        .matches(/\S/, 'Department Name cannot be just spaces'),
    }),
    onSubmit: handleSubmit,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue(event.target.name, event.target.value.trimStart());
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className={`mb-6 p-4 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
    >
      <div className="grid gap-4">
        <div>
          <label className="block text-sm font-medium">Department Name</label>
          <input
            type="text"
            name="departmentName"
            value={formik.values.departmentName}
            onChange={handleInputChange}
            onBlur={formik.handleBlur}
            className={`w-full p-2 text-black rounded border ${
              formik.touched.departmentName && formik.errors.departmentName ? 'border-red-500' : ''
            }`}
            placeholder="Enter department name"
            required
          />
          {formik.touched.departmentName && formik.errors.departmentName && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.departmentName}</p>
          )}
        </div>
      </div>

      <div className="mt-4 flex space-x-4">
        <button
          type="submit"
          className={`px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 ${
            loader ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={loader}
        >
          <Save className="h-4 w-4 inline mr-2" />
          {loader ? 'Saving...' : 'Save'}
        </button>
        <button
          type="button"
          onClick={() => navigate('/admin/department')}
          className="px-4 py-2 bg-gray-500 text-black rounded-lg shadow hover:bg-gray-600"
        >
          <XCircle className="h-4 w-4 inline mr-2" />
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditDepartmentForm;

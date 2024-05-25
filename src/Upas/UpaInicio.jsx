const UpaInicio = () => {
  return (
    <div class="bg-gray-100">
      <div class="min-h-screen flex items-center justify-center">
        <div class="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 class="text-xl font-semibold mb-4">Update your email</h1>
          <p class="text-gray-600 mb-6">
            Change the email address you want associated with your account.
          </p>
          <div class="mb-4">
            <input
              type="email"
              placeholder="you@example.com"
              class="email-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:border-blue-500"
            />
          </div>
          <button class="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
export default UpaInicio;

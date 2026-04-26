

### Step 1: Install Zod Validation Library
Add the `zod` validation library for robust schema-based validation (already installed in your project)

### Step 2: Create Input Validation Schema
Define a comprehensive validation schema for the inquiry form with:
- Name: 2-100 characters, trimmed, non-empty
- Email: Valid email format, max 255 characters
- Phone: Valid phone number format (10-15 digits), optional country code
- Product: Must be one of the predefined options
- Comments: Max 1000 characters, optional

### Step 3: Implement Form Validation
Update `src/pages/Inquiry.tsx` to:
- Integrate zod schema validation
- Display user-friendly error messages for validation failures
- Prevent form submission if validation fails
- Sanitize inputs before URL construction

### Step 4: Add Error Handling
Implement proper error states and user feedback for:
- Invalid input formats
- Failed validations
- Character limit warnings

### Step 5: Add Visual Feedback
Show character count for text areas and inputs with limits to guide users


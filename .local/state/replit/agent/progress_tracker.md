[x] 1. Install the required packages
[x] 2. Restart the workflow to see if the project is working
[x] 3. Verify the project is working using the feedback tool
[x] 4. Inform user the import is completed and they can start building, mark the import as completed using the complete_project_import tool
[x] 5. Answered user question about image storage location and base64 implementation
[x] 6. Fixed image storage approach - base64 embedded directly in menu item:
    - Modified POST /api/admin/upload-image to return base64 string (not store separately)
    - Returns: { success, base64: "data:image/jpeg;base64,...", mimeType }
[x] 7. Fixed frontend to save base64 directly:
    - Modified menu-management.tsx line 332 to use result.base64
    - Frontend now saves base64 string in item.image field
    - Result: Menu item document has image: "data:image/jpeg;base64,..." (direct embed)
[x] 8. Workflow restarted and verified running successfully
[x] 9. Import completed - project migrated successfully
[x] 10. Re-installed cross-env package and verified application working
[x] 11. Created Admin and Master Admin tabs in login page
[x] 12. Updated login logic to handle different roles if needed
[x] 13. Restarted workflow and verified changes
[x] 14. Added Admin Users section to Master Admin dashboard:
    - Added useQuery to fetch admin users from /api/admin/users
    - Displays admin users (like Aniket) in card grid format
    - Shows username, email, role badge, and assigned restaurant
    - Only visible to Master Admin users
    - Updated loading state to include usersLoading
    - Workflow restarted and verified - Admin Users section is now working
[x] 15. Added CRUD operations for Admin Users:
    - Edit: Modal to update email and assigned restaurant (username read-only)
    - Delete: Confirmation dialog with delete mutation
    - Added Edit and Delete buttons to each admin user card
    - Mutations: editUserMutation (PATCH) and deleteUserMutation (DELETE)
    - Query invalidation on success for real-time updates
    - Workflow restarted and verified - CRUD operations working
[x] 16. Fixed SelectItem error in Edit User Dialog:
    - Changed empty string value to "unassigned" 
    - Radix UI Select doesn't allow empty string values
    - Now shows "No Restaurant" label with "unassigned" value
    - Converts back to empty string when saving
    - Workflow restarted and verified - no console errors
[x] 17. Added missing PATCH and DELETE backend endpoints for users:
    - Added PATCH /api/admin/users/:id endpoint to update user email and assignedRestaurant
    - Added DELETE /api/admin/users/:id endpoint to delete users
    - Both endpoints require Master Admin authentication
    - Proper error handling and validation on both endpoints
    - Returns updated/deleted user in response
    - Workflow restarted - backend endpoints now functional
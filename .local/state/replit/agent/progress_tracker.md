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
[x] 14. Re-installed cross-env package (was missing) and restarted workflow - app running successfully
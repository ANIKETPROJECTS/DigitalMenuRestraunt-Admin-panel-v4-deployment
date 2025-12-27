[x] 1. Install the required packages
[x] 2. Restart the workflow to see if the project is working
[x] 3. Verify the project is working using the feedback tool
[x] 4. Inform user the import is completed and they can start building
[x] 5. Answered user question about image storage location and base64 implementation
[x] 6. Fixed image storage approach - base64 embedded directly in menu item
[x] 7. Fixed frontend to save base64 directly
[x] 8. Workflow restarted and verified running successfully
[x] 9. Import completed - project migrated successfully
[x] 10. Re-installed cross-env package and verified application working
[x] 11. Created Admin and Master Admin tabs in login page
[x] 12. Updated login logic to handle different roles
[x] 13. Restarted workflow and verified changes
[x] 14. Added Admin Users section to Master Admin dashboard
[x] 15. Added CRUD operations for Admin Users
[x] 16. Fixed SelectItem error in Edit User Dialog
[x] 17. Added missing PATCH and DELETE backend endpoints for users
[x] 18. Enhanced Edit User Dialog with full editable fields
[x] 19. Fixed "Unknown" restaurant display issue
[x] 20. Re-installed cross-env package after session restart
[x] 21. Added toggle to switch between Admin Users and Restaurants views
[x] 22. Restricted restaurant visibility for non-Master Admin users
[x] 23. Limited Admin Settings to Profile and Theme tabs for non-Master admins:
    - Added isMaster check in AdminSettingsModal component
    - Security and System tabs now hidden for non-Master admin users
    - TabsList grid changes from 4 columns to 2 columns for non-Masters
    - Only Profile and Theme tabs visible for non-Master admins
    - Master admins continue to see all 4 tabs: Profile, Theme, Security, System
    - Workflow restarted and verified - Settings modal now role-aware
[x] 30. Re-installed cross-env package after session restart (Dec 27, 2024)
[x] 31. Fixed data staleness by clearing TanStack Query cache on login/logout
[x] 32. Added query invalidation for user creation to ensure dashboard reflects new users immediately
[x] 33. Reverted forced refreshes and ensured proper state updates via programmatic navigation and query invalidation
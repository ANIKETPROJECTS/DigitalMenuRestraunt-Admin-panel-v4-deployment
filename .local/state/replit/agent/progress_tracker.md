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
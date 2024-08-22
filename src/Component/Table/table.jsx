import { useState } from 'react';

const permissionsData = [
  {
    name: 'Orders',
    subPermissions: [
      { name: 'View', checked: true },
      { name: 'Create', checked: false },
      { name: 'Modify', checked: false },
      { name: 'Cancel', checked: false },
      { name: 'Delete', checked: false },
    ],
  },
  {
    name: 'Dispatch',
    subPermissions: [
      { name: 'View', checked: true },
      { name: 'Create', checked: false },
      { name: 'Modify', checked: false },
      { name: 'Cancel', checked: false },
      { name: 'Delete', checked: false },
    ],
  },
  {
    name: 'Purchase Order',
    subPermissions: [
      { name: 'View', checked: true },
      { name: 'Create', checked: false },
      { name: 'Modify', checked: false },
      { name: 'Cancel', checked: false },
      { name: 'Delete', checked: false },
    ],
    subSubPermissions: [
      { name: 'Purchase Order Details', view: true, create: false, modify: false, cancel: false, delete: false },
      { name: 'Purchase Order Notes', view: false, create: false, modify: false, cancel: false, delete: false },
      { name: 'Purchase Order Documents', view: false, create: false, modify: false, cancel: false, delete: false },
      { name: 'Authorised Purchase Order', view: false, create: false, modify: false, cancel: false, delete: false },
      { name: 'Credit Note', view: false, create: false, modify: false, cancel: false, delete: false },
    ],
  },
  {
    name: 'Invoice',
    subPermissions: [
      { name: 'View', checked: true },
      { name: 'Create', checked: false },
      { name: 'Modify', checked: false },
      { name: 'Cancel', checked: false },
      { name: 'Delete', checked: false },
    ],
  },
];

const PermissionsTable = () => {
  const [permissions, setPermissions] = useState(permissionsData);
  const [selectedRole, setSelectedRole] = useState('Distributor');
  const [selectedSubCategory, setSelectedSubCategory] = useState('Westside park');
  const [expandedPermission, setExpandedPermission] = useState(null);

  const handleCheckboxChange = (permissionIndex, subIndex, fieldName, checked) => {
    const updatedPermissions = [...permissions];
    updatedPermissions[permissionIndex].subPermissions[subIndex][fieldName] = checked;
    setPermissions(updatedPermissions);
  };

  const handleSubSubCheckboxChange = (permissionIndex, subSubIndex, fieldName, checked) => {
    const updatedPermissions = [...permissions];
    updatedPermissions[permissionIndex].subSubPermissions[subSubIndex][fieldName] = checked;
    setPermissions(updatedPermissions);
  };

  const togglePermissionExpand = (permissionIndex) => {
    setExpandedPermission(
      expandedPermission === permissionIndex ? null : permissionIndex
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-full overflow-x-auto">
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="role" className="block font-medium mb-2">
            Role
          </label>
          <select
            id="role"
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
          >
            <option value="Distributor">Distributor</option>
            <option value="Manager">Manager</option>
            <option value="Employee">Employee</option>
          </select>
        </div>
        <div>
          <label htmlFor="subCategory" className="block font-medium mb-2">
            Sub-category
          </label>
          <select
            id="subCategory"
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={selectedSubCategory}
            onChange={(e) => setSelectedSubCategory(e.target.value)}
          >
            <option value="Westside park">Westside park</option>
            <option value="Downtown area">Downtown area</option>
            <option value="Eastside market">Eastside market</option>
          </select>
        </div>
      </div>

      <h2 className="text-lg font-bold mb-4">Permission Base Access</h2>
      <div className="grid grid-cols-7 gap-4 border-b border-gray-200 pb-4 font-bold">
        <div className="col-span-1">Permissions</div>
        <div className="col-span-1">View</div>
        <div className="col-span-1">Create</div>
        <div className="col-span-1">Modify</div>
        <div className="col-span-1">Cancel</div>
        <div className="col-span-1">Delete</div>
        <div className="col-span-1"></div>
      </div>
      {permissions.map((permission, permissionIndex) => (
        <div key={permissionIndex} className="grid grid-cols-7 gap-4 py-4">
          <div className="col-span-1 font-medium">
            <div
              className="cursor-pointer flex items-center justify-between"
              onClick={() => togglePermissionExpand(permissionIndex)}
            >
              <span>{permission.name}</span>
              {permission.subSubPermissions && (
                <span className="ml-2">
                  {expandedPermission === permissionIndex ? '-' : '+'}
                </span>
              )}
            </div>
          </div>
          {permission.subPermissions.map((subPerm, subIndex) => (
            <div key={subIndex} className="col-span-1 flex justify-center items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-indigo-600"
                checked={subPerm.checked}
                onChange={(e) => handleCheckboxChange(permissionIndex, subIndex, subPerm.name, e.target.checked)}
              />
            </div>
          ))}
          {expandedPermission === permissionIndex && (
            <div className="col-span-7 bg-gray-300 p-4 rounded-md mt-2 z-10 w-full">
              {permission.subSubPermissions.map((subSubPerm, subSubIndex) => (
                <div
                  key={subSubIndex}
                  className="grid grid-cols-6 gap-4 mb-2 items-center"
                >
                  <div className="col-span-1 text-gray-700">{subSubPerm.name}</div>
                  {Object.keys(subSubPerm).filter(key => key !== 'name').map((fieldName, fieldIndex) => (
                    <div
                      key={fieldIndex}
                      className="col-span-1 flex justify-center items-center"
                    >
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-indigo-600"
                        checked={subSubPerm[fieldName]}
                        onChange={(e) => handleSubSubCheckboxChange(permissionIndex, subSubIndex, fieldName, e.target.checked)}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PermissionsTable;

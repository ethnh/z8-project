import React, { useState } from 'react';

const initialPermissions = [
  {
    name: 'Orders',
    permissions: { view: true, create: false, modify: true, cancel: false, delete: true },
    subPermissions: [

      { name: 'Authorised Purchase Order', permissions: { view: false, create: false, modify: false, cancel: false, delete: false } },
      { name: 'Credit Note', permissions: { view: true, create: true, modify: true, cancel: true, delete: true } },
    ],
  },
  {
    name: 'Dispatch',
    permissions: { view: false, create: true, modify: false, cancel: true, delete: true },
  },
  {
    name: 'Purchase Order',
    permissions: { view: true, create: true, modify: false, cancel: true, delete: false },
    subPermissions: [
      { name: 'Purchase Order Details', permissions: { view: true, create: false, modify: true, cancel: false, delete: true } },
      { name: 'Purchase Order Notes', permissions: { view: true, create: true, modify: false, cancel: true, delete: false } },
      { name: 'Purchase Order Documents', permissions: { view: true, create: true, modify: true, cancel: true, delete: false } },
      { name: 'Authorised Purchase Order', permissions: { view: false, create: false, modify: false, cancel: false, delete: false } },
      { name: 'Credit Note', permissions: { view: true, create: true, modify: true, cancel: true, delete: true } },
    ],
  },
  {
    name: 'Invoice',
    permissions: { view: true, create: false, modify: false, cancel: false, delete: true },
  },
];

const PermissionsTable = () => {
  const [permissions, setPermissions] = useState(initialPermissions);
  const [expandedPermission, setExpandedPermission] = useState('Purchase Order');

  const handlePermissionChange = (index, permissionType, checked, subIndex = null) => {
    const updatedPermissions = [...permissions];
    if (subIndex === null) {
      updatedPermissions[index].permissions[permissionType] = checked;
    } else {
      updatedPermissions[index].subPermissions[subIndex].permissions[permissionType] = checked;
    }
    setPermissions(updatedPermissions);
  };

  const toggleExpand = (name) => {
    setExpandedPermission(expandedPermission === name ? null : name);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-black mb-1">Role</label>
          <select className="w-full border border-gray-300 rounded-md p-2">
            <option>Distributor</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-black mb-1">Sub-category</label>
          <select className="w-full border border-gray-300 rounded-md p-2">
            <option>Westside park</option>
          </select>
        </div>
      </div>

      <h2 className="text-lg font-bold mb-4">Permission Base Access</h2>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="text-left py-2 px-4">Permissions</th>
            <th className="text-center py-2 px-4">View</th>
            <th className="text-center py-2 px-4">Create</th>
            <th className="text-center py-2 px-4">Modify</th>
            <th className="text-center py-2 px-4">Cancel</th>
            <th className="text-center py-2 px-4">Delete</th>
          </tr>
        </thead>
        <tbody>
          {permissions.map((item, index) => (
            <React.Fragment key={item.name}>
              <tr className="border-b">
                <td className="py-2 px-4">
                  <button
                    onClick={() => toggleExpand(item.name)}
                    className="flex items-center"
                  >
                    {item.subPermissions && (
                      <span className="mr-2">
                        {expandedPermission === item.name ? '▼' : '▶'}
                      </span>
                    )}
                    {item.name}
                  </button>
                </td>
                {['view', 'create', 'modify', 'cancel', 'delete'].map((type) => (
                  <td key={type} className="text-center py-2 px-4">
                    <input
                      type="checkbox"
                      checked={item.permissions[type]}
                      onChange={(e) => handlePermissionChange(index, type, e.target.checked)}
                      className="form-checkbox h-5 w-5 text-blue-600"
                    />
                  </td>
                ))}
              </tr>
              {item.subPermissions && expandedPermission === item.name && (
                item.subPermissions.map((subItem, subIndex) => (
                  <tr key={subItem.name} className="bg-gray-50">
                    <td className="py-2 px-4 pl-8">{subItem.name}</td>
                    {['view', 'create', 'modify', 'cancel', 'delete'].map((type) => (
                      <td key={type} className="text-center py-2 px-4">
                        <input
                          type="checkbox"
                          checked={subItem.permissions[type]}
                          onChange={(e) => handlePermissionChange(index, type, e.target.checked, subIndex)}
                          className="form-checkbox h-5 w-5 text-blue-600"
                        />
                      </td>
                    ))}
                  </tr>
                ))
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PermissionsTable;
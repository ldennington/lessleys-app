import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import Toggle from "./Toggle";
import JSONOutput from "./JsonOutput";

declare global {
  interface Window {
    Prism: any;
  }
}

export default function UserDetails() {
  const { isLoaded, user } = useUser();
  const [jsonOutput, setJsonOutput] = useState(false);

  return (
    <div
      className="bg-white overflow-auto sm:rounded-lg"
      style={{
        boxShadow: `0px 20px 24px -4px rgba(16, 24, 40, 0.08)`,
      }}
    >
      <div className="flex p-8 sm:p-6 items-center border-b border-gray-200">
        <h3 className="text-xl leading-6 font-semibold text-gray-900 my-auto">
          User
        </h3>

        <Toggle
          checked={jsonOutput}
          onChange={() => setJsonOutput(!jsonOutput)}
          disabled={!isLoaded}
        />
      </div>
      {isLoaded && user ? (
        jsonOutput ? (
          <div className="overflow-scroll max-h-96 pb-6">
            <JSONOutput json={user} />
          </div>
        ) : (
          <div className="pb-6 max-h-96">
            <dl>
              <div className="px-8 py-2">
                <dt className="text-sm font-semibold text-black mb-1">User ID</dt>
                <dd className="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2 flex gap-2">
                  {user.id}
                </dd>
              </div>
              {user.firstName && (
                <div className="px-8 py-2">
                  <dt className="text-sm font-semibold text-black mb-1">First Name</dt>
                  <dd className="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
                    {user.firstName}
                  </dd>
                </div>
              )}
              {user.lastName && (
                <div className="px-8 py-2">
                  <dt className="text-sm font-semibold text-black mb-1">Last Name</dt>
                  <dd className="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
                    {user.lastName}
                  </dd>
                </div>
              )}
              <div className="px-8 py-2">
                <dt className="text-sm font-semibold text-black mb-1">Email addresses</dt>
                <dd className="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
                  {user.emailAddresses.map((email) => (
                    <div key={email.id} className="flex gap-2 mb-1">
                      {email.emailAddress}
                      {user.primaryEmailAddressId === email.id && (
                        <span className="text-xs bg-primary-50 text-primary-700 rounded-2xl px-2 font-medium pt-[2px]">
                          Primary
                        </span>
                      )}
                    </div>
                  ))}
                </dd>
              </div>
              <div className="px-8 py-2">
                <dt className="text-sm font-semibold text-black mb-1">City</dt>
                <dd className="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
                  {String(user.publicMetadata.city)}
                </dd>
              </div>
              <div className="px-8 py-2">
                <dt className="text-sm font-semibold text-black mb-1">State</dt>
                <dd className="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
                  {String(user.publicMetadata.state)}
                </dd>
              </div>
              <div className="px-8 py-2">
                <dt className="text-sm font-semibold text-black mb-1">Birthdate</dt>
                <dd className="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
                {typeof user.publicMetadata.birthdate === 'string' || typeof user.publicMetadata.birthdate === 'number'
                  ? new Date(user.publicMetadata.birthdate).toLocaleDateString('en-US', {
                      month: '2-digit',
                      day: '2-digit',
                      year: 'numeric',
                    })
                  : 'N/A'}
                </dd>
              </div>
            </dl>
          </div>
        )
      ) : (
        <div className="text-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          Loading user data...
        </div>
      )}
    </div>
  );
}

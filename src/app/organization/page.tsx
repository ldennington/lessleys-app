import { OrganizationList } from '@clerk/nextjs'

export default function CreateOrganizationPage() {
  return (
      <div>
        <div className="flex justify-center py-24">
          <OrganizationList 
            afterSelectOrganizationUrl="/"
            afterCreateOrganizationUrl="/"
            afterSelectPersonalUrl="/" />
        </div>
      </div>
    )
}

import {
    Menu, Cloud, Server, BookOpen, Info, LayoutDashboard,
    Users, Settings, Home, Bus, Package, Library,
    MessageSquare, Book, GraduationCap, ClipboardList,
    FileText, UserCircle, Wallet, CreditCard, User,
    BarChart, Laptop, Monitor
} from "lucide-react";

// Documentation structure based on user input
export const docsContent = [
    {
        category: "Welcome",
        items: [
            {
                slug: "welcome",
                title: "Welcome",
                content: `
          <div class="text-center py-10">
            <h1 class="text-2xl font-bold text-[#581C87]/70 mb-2">Welcome</h1>
            <h2 class="text-xl text-[#581C87]/70 mb-4">To</h2>
            <h1 class="text-2xl font-bold text-[#6f42c1] mb-2">eSkoolia ultimate Education ERP</h1>
            <p class="text-[#581C87]/70 mb-4">Ultimate solution for your school to run modern way</p>
            <p class="text-[#581C87]/70 font-medium">By</p>
            <h3 class="text-xl font-bold text-[#6f42c1] mb-12">eSkoolia</h3>

            <div class="text-left max-w-2xl mx-auto space-y-1 mb-10 text-xs text-blue-500 text-center">
               <p>Email: pro@eskoolia.com</p>
               <p>Web: pro.eskoolia.com</p>
            </div>

            <div class="text-center space-y-4 text-[#581C87]/70 mb-10">
              <p>We would like to thank you for purchasing eSkoolia School! We are very pleased you have chosen eSkoolia School for your institution, you will not be disappointed! Before you get started, please be sure to always check out these documentation files. We outline all kinds of good information, and provide you with all the details you need to use eSkoolia School. eSkoolia School can be used with any school, college, university, training/coaching institute.</p>
              <p>If you are unable to find your answer here in our documentation, watch our Video Tutorials, you can also visit our Help & Support. Chances are your question or issue have been brought up already and the answer is waiting to be found. If you are unable to find it anywhere, then please go our Support section and open a new Support Ticket with all the details we need. Please be sure to include your site URL as well. Thank you, we hope you enjoy using eSkoolia School!</p>
            </div>

            <div class="flex justify-center gap-4">
              <button class="px-6 py-2 bg-[#8B5CF6] text-white font-bold rounded-full text-[10px] uppercase tracking-wide shadow-md hover:bg-[#7c3aed] transition-colors">Video Tutorials</button>
              <button class="px-6 py-2 bg-white text-[#8B5CF6] border border-[#8B5CF6] font-bold rounded-full text-[10px] uppercase tracking-wide shadow-sm hover:bg-[#581C87]/5 transition-colors">Help & Supports</button>
            </div>
          </div>
        `
            }
        ]
    },
    {
        category: "Initiate",
        items: [
            {
                slug: "system-requirements", title: "System Requirements", content: `
            <div class="space-y-4">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-4 text-center">eSkoolia System Requirements</h3>
                <p>The Laravel framework has a few system requirements. All of these requirements are satisfied by the Laravel Homestead virtual machine, so it's highly recommended that you use Homestead as your local Laravel development environment.</p>
                <p>However, if you are not using Homestead, you will need to make sure your server meets the following requirements:</p>
                <ul class="list-none space-y-1 inline-block">
                    <li>PHP >= 7.1.3</li>
                    <li>OpenSSL PHP Extension</li>
                    <li>PDO PHP Extension</li>
                    <li>Mbstring PHP Extension</li>
                    <li>Tokenizer PHP Extension</li>
                    <li>XML PHP Extension</li>
                    <li>Ctype PHP Extension</li>
                    <li>JSON PHP Extension</li>
                    <li>BCMath PHP Extension</li>
                </ul>
                <p class="italic text-sm">* In most hosting accounts, these extensions are enabled by default. But you should check with your hosting provider.</p>
                <p>After installation eSkoolia School to work properly, you must make few directories/files writable.</p>
                <p>Below are a list of directories/files you should ensure that have write permissions.</p>
                <ul class="list-none space-y-1 inline-block">
                    <li>installation_dir/storage/app/</li>
                    <li>installation_dir/storage/framework/cache</li>
                    <li>installation_dir/storage/framework/session</li>
                    <li>installation_dir/storage/framework/testing</li>
                    <li>installation_dir/public/uploads/</li>
                </ul>
            </div>` },
            {
                slug: "getting-started", title: "Getting Started", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-4 text-center">eSkoolia School Installation</h3>
                
                <ol class="list-decimal pl-5 space-y-6 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-50">
                             <h4 class="font-bold text-xl text-[#581C87]/70 mb-6">Database and database user creation on Server</h4>
                             <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                                <li>
                                    <p class="mt-1 mb-3">Log into your cPanel.</p>
                                    <img src="/Eskooly/cPanelLogin.png" alt="Log into cPanel" class="h-48 rounded-lg shadow-md border border-gray-50" />
                                </li>
                                <li>
                                    <p class="mt-1 mb-3">Click the MySQL Database Wizard under the Databases heading.</p>
                                    <img src="/Eskooly/install-dbwizard.png" alt="MySQL Database Wizard" class="h-48 rounded-lg shadow-md border border-gray-50" />
                                </li>
                                <li>
                                    <p class="mt-1 mb-3">Next to New Database enter a name for your database and click Next Step.</p>
                                    <img src="/Eskooly/install-dbwizard2.png" alt="New Database" class="h-48 rounded-lg shadow-md border border-gray-50" />
                                </li>
                                <li>
                                    <p class="mt-1 mb-3">Next to Username enter a username. Enter a password next to Password, enter it again for Password (Again) and then click Create User.</p>
                                    <img src="/Eskooly/install-dbwizard3.png" alt="Create User" class="h-56 rounded-lg shadow-md border border-gray-50" />
                                </li>
                                <li>
                                    <p class="mt-1 mb-3">On the next page, you'll assign privileges for the user to the database. Check the box next to All Privileges and then click Next Step.</p>
                                    <img src="/Eskooly/install-dbwizard4.png" alt="Assign Privileges" class="h-64 rounded-lg shadow-md border border-gray-50" />
                                </li>
                             </ol>
                        </div>
                    </li>

                    <li>
                        <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-50">
                             <h4 class="font-bold text-xl text-[#581C87]/70 mb-6">Upload the package to your host</h4>
                             <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                                <li>
                                    <p class="mt-1 mb-3">Download the package from 2checkout or from pro.eskoolia.com Website. Unzip the package and you'll find the following contents: Documentation, upload.zip</p>
                                    <img src="/Eskooly/install-files.png" alt="Download Package" class="h-48 rounded-lg shadow-md border border-gray-50" />
                                </li>
                                <li>
                                    <p class="mt-1 mb-3">Upload file "upload.zip" to your host inside the desired location using cPanel File Manager</p>
                                    <img src="/Eskooly/install-filemanager.png" alt="Upload File" class="h-28 rounded-lg shadow-md border border-gray-50" />
                                </li>
                                <li>
                                    <p class="mt-1 mb-3">After upload is completed, Right click on the package and select Extract. This will extract the zipped file contents</p>
                                    <img src="/Eskooly/install-extract.png" alt="Extract Package" class="h-48 rounded-lg shadow-md border border-gray-50" />
                                </li>
                             </ol>
                        </div>
                    </li>

                    <li>
                        <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-50">
                             <h4 class="font-bold text-xl text-[#581C87]/70 mb-6">Configure eSkoolia with Database credentials</h4>
                             <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                                <li>
                                     <p class="mt-1 mb-3">Use the file manager to edit the file in the path .env</p>
                                     <p class="mt-1 mb-3">Add Database configuration in the file as described.</p>
                                     <img src="/Eskooly/env.png" alt="Edit .env" class="h-48 rounded-lg shadow-md border border-gray-50" />
                                </li>
                             </ol>
                        </div>
                    </li>

                    <li>
                        <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-50">
                             <h4 class="font-bold text-xl text-[#581C87]/70 mb-6">Adjust the folders Permissions</h4>
                             <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                                <li>
                                    <p class="mt-1 mb-3">Change the permissions of uploads folder and all it's contents (Files & Folders) to 777</p>
                                </li>
                                <li>
                                    <p class="mt-1 mb-3">Change the permissions of storage folder and all it's contents (Files & Folders) to 777</p>
                                </li>
                             </ol>
                        </div>
                    </li>
                    
                    <li>
                        <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-50">
                             <h4 class="font-bold text-xl text-[#581C87]/70 mb-6">Start the installation</h4>
                             <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                                <li>
                                    <p class="mt-1 mb-3">Use your browser to eSkoolia install Script. Type in browser your application location followed by /install and hit Start Installation</p>
                                    <img src="/Eskooly/step1.png" alt="Start Installation" class="h-48 rounded-lg shadow-md border border-gray-50" />
                                </li>
                                <li>
                                    <p class="mt-1 mb-3">Checking Codecanyon Credentials. If all thing is ok Press Next Step</p>
                                    <img src="/Eskooly/step2.png" alt="Check Credentials" class="h-56 rounded-lg shadow-md border border-gray-50" />
                                </li>
                                <li>
                                    <p class="mt-1 mb-3">Checking Database configuration and Files & Folders permissions. If all thing is ok Press Next Step</p>
                                    <img src="/Eskooly/step3.png" alt="Check Database" class="h-56 rounded-lg shadow-md border border-gray-50" />
                                </li>
                                <li>
                                    <p class="mt-1 mb-3">Type in Administrator Details, Site Settings, Default Academic Year & License Code. Then Press Next Step</p>
                                    <img src="/Eskooly/step4.png" alt="Admin Details" class="h-56 rounded-lg shadow-md border border-gray-50" />
                                </li>
                                <li>
                                    <p class="mt-1 mb-3">Installation complete</p>
                                    <img src="/Eskooly/login.png" alt="Installation Complete" class="h-56 rounded-lg shadow-md border border-gray-50" />
                                </li>
                             </ol>
                        </div>
                    </li>
                </ol>
            </div>` },
            {
                slug: "get-support", title: "Get Support", content: `
            <div class="space-y-4">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-4 text-center">Get Support from eSkoolia</h3>
                <p>To get Technical/Sales support. You must create eSkoolia Account first.</p>
                <div class="p-4 bg-gray-50 rounded-lg inline-block text-center w-full">
                    <h4 class="font-bold mb-2 text-center text-[#581C87]/70">Contact Info</h4>
                    <p class="text-center">Email: <a href="mailto:pro@eskoolia.com" class="text-blue-600 hover:underline">pro@eskoolia.com</a></p>
                    <p class="text-center">Web: <a href="https://pro.eskoolia.com" target="_blank" class="text-blue-600 hover:underline">pro.eskoolia.com</a></p>
                    <p class="text-center">Support: <a href="http://ticket.eskoolia.com" target="_blank" class="text-blue-600 hover:underline">http://ticket.eskoolia.com</a></p>
                </div>
            </div>` }
        ]
    },
    {
        category: "Dashboard",
        items: [
            {
                slug: "dashboard-overview", title: "Dashboard", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Dashboard</h3>
                <img src="/Eskooly/dashboard1.png" alt="Dashboard" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-none space-y-6">
                    <li>
                             <h4 class="font-bold text-xl text-[#581C87]/70 mb-4">1 & 3. Dashboard</h4>
                             <p class="mt-1 mb-6 text-[#581C87]/70">At the top menu of left sidebar is Dashboard. There are several view port in dashboard. we can see the number of students, teachers and staff etc. at a glance. Summary of the Income and Expenses is very important for ERP system. After login a user can see the update for that day.</p>                    </li>
                    <li>
                             <h4 class="font-bold text-xl text-[#581C87]/70 mb-4">2. Website</h4>
                             <p class="mt-1 mb-6 text-[#581C87]/70">From dashboard a user can easily return to own website home page.</p>
                    </li>
                    <li>
                             <h4 class="font-bold text-xl text-[#581C87]/70 mb-4">4. Reports</h4>
                             <p class="mt-1 mb-6 text-[#581C87]/70">Reports section is very important in this School Management ERP. You can go to report section from all over the system.</p>
                    </li>
                    <li>
                             <h4 class="font-bold text-xl text-[#581C87]/70 mb-4">5. Language</h4>
                             <p class="mt-1 mb-6 text-[#581C87]/70">eSkoolia delivered to you equipped with different languages : English, Arabic (RTL), French, Dutch, German, Hindi, Italian, Turkish, Russian, Spanish & Portuguese etc. You can also add language with your own customization.</p>
                    </li>
                    <li>
                             <h4 class="font-bold text-xl text-[#581C87]/70 mb-4">6. Notification</h4>
                             <p class="mt-1 mb-6 text-[#581C87]/70">If Administrators or Teachers set any task for student, then it will automatically send notifications to Teachers, Students (All students or specify class's students) and parents also you can track sent messages.</p>
                    </li>
                    <li>
                             <h4 class="font-bold text-xl text-[#581C87]/70 mb-4">7. Profile</h4>
                             <p class="mt-1 mb-6 text-[#581C87]/70">The user can see their profile, change their existing password. Logout button at the bottom of this profile section.</p>
                    </li>
                    <li>
                             <h4 class="font-bold text-xl text-[#581C87]/70 mb-4">8. Number of students</h4>
                             <p class="mt-1 mb-6 text-[#581C87]/70">The user can see their profile, change their existing password. Logout button at the bottom of this profile section.</p>
                             <img src="/Eskooly/dashboard2.png" alt="Number of students" class="w-full rounded-lg shadow-md border border-gray-50" />
                             <img src="/Eskooly/dashboard3.png" alt="Number of students" class="w-full rounded-lg shadow-md border border-gray-50" />
                    </li>                    
                    <li>
                             <h4 class="font-bold text-xl text-[#581C87]/70 mb-4">1. Dashboard</h4>
                             <p class="mt-1 mb-6 text-[#581C87]/70">At the top menu of left sidebar is Dashboard. There are several view port in dashboard. we can see the number of students, teachers and staff etc. at a glance. Summary of the Income and Expenses is very important for ERP system. After login a user can see the update for that day.</p>
                    </li>
                </ol>
            </div>`
            }
        ]
    },
    {
        category: "Admin Section",
        items: [
            {
                slug: "admission-query", title: "Admission Query", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Admission Query</h3>
                <img src="/Eskooly/admission_query.png" alt="Admission Query" class="w-full rounded-lg shadow-md border border-gray-50" />
                <img src="/Eskooly/admission_query0.1.png" alt="Admission Query" class="w-full rounded-lg shadow-md border border-gray-50" />
                <img src="/Eskooly/admission_query1.png" alt="Admission Query" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-4 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add Admission Query</span>
                        <p class="mt-1">Super Admin can add admission query. In the admission query all the details information of query should have to submit.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Search Admission Query</span>
                        <p class="mt-1">Admission query can be searched through certain date to date, information source and which are active or not.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Select Actions</span>
                        <p class="mt-1">In the actions option, if super admin wants, he can add next follow up query, edit and delete of a particular query.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Follow up Admission Query</span>
                        <p class="mt-1">If needed several follow up admission query can be added. That will be also listed in the follow up list and if he will want, he can delete it.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "visitor-book", title: "Visitor Book", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Visitor Book</h3>
                <img src="/Eskooly/visitor_book.png" alt="Visitor Book" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-4 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add Visitor</span>
                        <p class="mt-1">For store how much visitors visit everyday and their information, super admin can add their detail information and that is shown in the visitor list.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Select Actions</span>
                        <p class="mt-1">In the visitor list, edit, delete and download visitor information is possible.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "complaint", title: "Complaint", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Complaint</h3>
                <img src="/Eskooly/complaint.png" alt="Complaint" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-4 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add Complaint</span>
                        <p class="mt-1">If anyone complain that can be listed by adding the complaint. Complaint includes who complains, which type of complaint is it etc.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Select Actions</span>
                        <p class="mt-1">In the complaint list several actions are included which are view the complaint details, edit and delete.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "postal-receive", title: "Postal Receive", content: `
             <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Postal Receive</h3>
                <img src="/Eskooly/postal_receive.png" alt="Postal Receive" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-4 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add Postal Receive</span>
                        <p class="mt-1">Super admin can add which postal are received. Here includes postal comes from and where it will go and several things.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Select Actions</span>
                        <p class="mt-1">Super admin can edit, delete and download the postal receive information.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "postal-dispatch", title: "Postal Dispatch", content: `
            <div class="space-y-6">
                 <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Postal Dispatch</h3>
                 <img src="/Eskooly/postal_dispatch.png" alt="Postal Dispatch" class="w-full rounded-lg shadow-md border border-gray-50" />
                 <ol class="list-decimal pl-5 space-y-4 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add Postal Dispatch</span>
                        <p class="mt-1">The postal where will go, it can be added by super admin. Sender and receiver information are includes here.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Select Actions</span>
                        <p class="mt-1">Super admin can edit, delete and download the postal dispatch information.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "phone-call-log", title: "Phone Call Log", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Phone Call Log</h3>
                <img src="/Eskooly/phone_log.png" alt="Phone Call Log" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-4 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add Phone Call</span>
                        <p class="mt-1">Super admin can able to add the phone call log. In this call log, All incoming, outgoing and it's call duration, date, next follow up date and all the details information are included.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Select Actions</span>
                        <p class="mt-1">Super admin can edit, delete the phone call log information.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "admin-setup", title: "Admin Setup", content: `
            <div class="space-y-6">
                 <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Admin Setup</h3>
                 <img src="/Eskooly/admin_setup.png" alt="Admin Setup" class="w-full rounded-lg shadow-md border border-gray-50" />
                 <ol class="list-decimal pl-5 space-y-4 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add Admin Setup</span>
                        <p class="mt-1">In the admin setup, super admin can add different criteria which are sorted by their type. The types are source, purpose, complaint type, reference.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Select Actions</span>
                        <p class="mt-1">The data list can be deleted and edited by super admin.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "student-certificate", title: "Student Certificate", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Student Certificate</h3>
                <img src="/Eskooly/student_certificate.png" alt="Student Certificate" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-4 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add Student Certificate</span>
                        <p class="mt-1">Super admin can add student certificate. Certificate name and background image is mandatory field in this section.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Select Actions</span>
                        <p class="mt-1">The Student Certificate list can be viewed, deleted and edited by super admin.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "generate-certificate", title: "Generate Certificate", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Generate Certificate</h3>
                <img src="/Eskooly/generate_certificate.png" alt="Generate Certificate" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-4 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Search Generate Certificate</span>
                        <p class="mt-1">To search student list, super admin should have to select class name, section name and which certificate he wants to generate.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Student List</span>
                    </li>
                </ol>
            </div>` },
            {
                slug: "student-id-card", title: "Student ID Card", content: `
             <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Student ID Card</h3>
                <img src="/Eskooly/student_id_card.png" alt="Student ID Card" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-4 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add Student ID Card</span>
                         <p class="mt-1">To add student id card, id card title, logo of institution, designation of the person whom id card will generate, signature of the person is must needed to include.</p>
                    </li>
                    <li>
                         <span class="font-bold text-[#581C87]/70">Select Actions</span>
                         <p class="mt-1">The Student id card list can be viewed, deleted and edited by super admin.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "generate-id-card", title: "Generate ID Card", content: `
             <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Generate ID Card</h3>
                <img src="/Eskooly/generate_id_card.png" alt="Generate ID Card" class="w-full rounded-lg shadow-md border border-gray-50" />
                 <ol class="list-decimal pl-5 space-y-4 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Search Generate ID Card</span>
                        <p class="mt-1">To search student list, super admin should have to select class name, section name and which id card he wants to generate.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Student List</span>
                    </li>
                </ol>
            </div>` }
        ]
    },
    {
        category: "System Setting",
        items: [
            {
                slug: "general-setting", title: "General Setting", content: `
             <div class="space-y-6">
                 <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia General Setting</h3>
                 <img src="/Eskooly/general_setting.png" alt="General Setting" class="w-full rounded-lg shadow-md border border-gray-50" />
                 <ol class="list-decimal pl-5 space-y-4 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Upload Logo</span> 
                        <p class="mt-1">Upload Institution logo</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Change Logo</span> 
                        <p class="mt-1">After uploading Institution logo it will publish</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">General Settings View</span> 
                        <p class="mt-1">Summary of General Settings View</p>
                        <img src="/Eskooly/general-setting2.png" alt="General Settings View" class="w-full rounded-lg shadow-md border border-gray-50" />
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Upload Form of General Settings</span> 
                        <p class="mt-1">You can update General Settings according to your institution</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Change Currency</span> 
                        <p class="mt-1">You can change currency as your demand. All kind of currency is available in this system.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Change Language</span> 
                        <p class="mt-1">You can choose language as your demand. If your language is not available, the you have to add language into your system from 'system-setting>language-settings'. After adding language, it is required to setup and then you have to make it default.</p>
                    </li>
                 </ol>
             </div>` },
            {
                slug: "email-setting", title: "Email Setting", content: `
             <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Email Setting</h3>
                <img src="/Eskooly/email-setting.png" alt="Email Setting" class="w-full rounded-lg shadow-md border border-gray-50" />
                <p>You have to configuration email.</p>
            </div>` },
            {
                slug: "payment-method-settings", title: "Payment Method Settings", content: `
             <div class="space-y-6">
                  <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Payment Method Settings</h3>
                  <img src="/Eskooly/payment-paypal.png" alt="Payment Method Settings" class="w-full rounded-lg shadow-md border border-gray-50" />
                  <ol class="list-decimal pl-5 space-y-4 marker:text-[#581C87]/70 marker:font-bold">
                     <li>
                         <span class="font-bold text-[#581C87]/70">Select Payment Method</span>
                         <p class="mt-1">PayPal and Stripe payment method implemented. You can configuration one of them.</p>
                     </li>
                     <li>
                         <span class="font-bold text-[#581C87]/70">Update Payment Method</span>
                         <p class="mt-1">To enabling online payment in Parent Panel and Student Panel update your payment gateway account details for this, go to System Settings > Payment Methods select your appropriate payment gateway and add you payment gateway account details then click on save button and enable it from right side box.</p>
                     </li>
                     <li>
                         <span class="font-bold text-[#581C87]/70">Switch Payment Method</span>
                         <p class="mt-1">The administrator can switch within payment method</p>
                         <img src="/Eskooly/payment-stripe.png" alt="Payment Method Settings" class="w-full rounded-lg shadow-md border border-gray-50" />
                     </li>
                     <li>
                         <span class="font-bold text-[#581C87]/70">Stripe Payment Method</span>
                         <p class="mt-1">Stripe is the premier option for online credit card processing; it’s also the most popular premium payment gateway for Easy Digital Downloads – and it’s our preferred option!</p>

                         <h5 class="font-bold text-[#581C87]/70 mt-4 mb-2">Adding Stripe To Your Create Account</h5>
                         <p class="mt-1 mb-2">You will need to add Stripe as a payment gateway option to your Create account.</p>

                         <p class="mt-2 font-semibold text-[#581C87]/70">To do this, please follow the steps below:</p>
                         <ul class="list-disc pl-5 mt-2 space-y-1 text-[#581C87]/70">
                             <li>Log in to your Create account</li>
                             <li>Click "Shop" from the Top menu</li>
                             <li>Click "Shop Settings" from the left-hand menu</li>
                             <li>Click "Payment Gateways"</li>
                             <li>Click "Add New Gateway"</li>
                             <li>Choose "Stripe"</li>
                             <li>Click "Save Changes" to add the gateway</li>
                         </ul>

                         <h5 class="font-bold text-[#581C87]/70 mt-6 mb-2">Testing Stripe With Your Create Website</h5>

                         <p class="mt-2 font-semibold text-[#581C87]/70">To get these, please follow the steps below:</p>
                         <ul class="list-disc pl-5 mt-2 space-y-1 text-[#581C87]/70">
                             <li>Log in to your Stripe account</li>
                             <li>Click "Account" from the top right hand of the page</li>
                             <li>Click "Account Settings"</li>
                             <li>Click the "API Keys" from the top tabs</li>
                             <li>Here, you will need the "Test Secret Key" and "Test Publishable Key"</li>
                         </ul>
                         <img src="/Eskooly/stripe_configuration_screen.png" alt="Payment Method Settings" class="w-full rounded-lg shadow-md border border-gray-50" />
                     </li>
                  </ol>
             </div>` },
            {
                slug: "role-permission", title: "Role Permission", content: `
              <div class="space-y-6">
                  <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Role Permission</h3>
                  <img src="/Eskooly/role-permission.png" alt="Role Permission" class="w-full rounded-lg shadow-md border border-gray-50" />
                   <ol class="list-decimal pl-5 space-y-4 marker:text-[#581C87]/70 marker:font-bold">
                      <li>
                         <span class="font-bold text-[#581C87]/70">Role Permission</span>
                         <p class="mt-1">The administrator can add role and assign their permission</p>
                      </li>
                      <li>
                         <span class="font-bold text-[#581C87]/70">Select</span>
                         <p class="mt-1">The administrator can edit or delete role and assign their permission</p>
                         <img src="/Eskooly/assign-permission.png" alt="Role Permission" class="w-full rounded-lg shadow-md border border-gray-50" />
                      </li>
                      <li>
                         <span class="font-bold text-[#581C87]/70">Role Permission Assign</span>
                         <div class="mt-1 text-[#581C87]/70 space-y-2">
                             <p>The administrator can assign their permission</p>
                             <p class="text-sm">Roles Permissions- Go to System Settings > Roles Permissions here we can create different Roles for staff users and then assign different user permission to this Role. To add new role enter Role Name then click on Save button all existing roles can be see from right side of this page. By default in eSkoolia School you will get 6 user roles SuperAdmin, Admin, Teacher, Accountant, Librarian, Receptionist. You can edit name or permission of these roles except SuperAdmin. To assign permission click on Assign Permission button from Action column. At this page you can see Module wise different Features and their different Permissions. Carefully assign different permissions on roles. After assigning permission, check where it is effecting in system. There are 4 types of permissions present here View, Add, Edit and Delete. Here note that if you are assigning Add/Edit or Delete permission then View permission should be given obviously if you have not given View permission then system can behave inconsistent so in best practice if you are giving Add/Edit/Delete any one permission then give View permission too.</p>
                         </div>
                      </li>
                   </ol>
             </div>` },
            {
                slug: "base-setup", title: "Base Setup", content: `
              <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Base Setup</h3>
                <img src="/Eskooly/base-setup.png" alt="Base Setup" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-4 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Base Setup</span>
                        <p class="mt-1">Administrator can add gender, religion, and blood group.</p>
                    </li>
                </ol>
              </div>`
            },
            {
                slug: "academic-year", title: "Academic Year", content: `
              <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Academic Year</h3>
                <img src="/Eskooly/academic-year.png" alt="Academic Year" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-4 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Academic Year</span>
                        <p class="mt-1">Administrator can add academic year.</p>
                    </li>
                </ol>
              </div>`
            },
            {
                slug: "session", title: "Session", content: `
              <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Session</h3>
                <img src="/Eskooly/session.png" alt="Session" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-4 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Session</span>
                        <p class="mt-1">You can manage session. You have to go System Setting > Session. You can add new session, edit & delete.</p>
                    </li>
                </ol>
              </div>`
            },
            {
                slug: "holiday", title: "Holiday", content: `
              <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Holiday</h3>
                <img src="/Eskooly/holiday.png" alt="Holiday" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-4 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Holiday</span>
                        <p class="mt-1">Administrator can manage holiday. You have to go System Setting > Holiday. You can add new holiday, edit & delete. It will show in dashboard calendar.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Manage Holiday</span>
                        <p class="mt-1">Administrator can edit & delete. It will show in dashboard calendar.</p>
                    </li>
                </ol>
              </div>`
            },
            {
                slug: "sms-settings", title: "Sms Settings", content: `
              <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">Sms Settings</h3>
                <img src="/Eskooly/sms-settings.png" alt="Sms Settings" class="w-full rounded-lg shadow-md border border-gray-50" />
                 <ol class="list-decimal pl-5 space-y-4 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Sms Settings</span>
                        <p class="mt-1">You can seletect sms sender service provider</p>
                        <p class="mt-1">Clickatell SMS Platform is a powerful, fully scalable communication system that enables you to manage your business communication more effectively. With an infrastructure covering over 220 territories and 1 000+ networks, your business can now connect with customers in every corner of the world.</p>
                        <img src="/Eskooly/sms-settings2.png" alt="Sms Settings" class="w-full rounded-lg shadow-md border border-gray-50" />
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Sms Configuration</span>
                        <p class="mt-1">You can send sms to the students, teachers, & parents. You have to purchase package for sending message. There are two already implemented.</p>
                        <img src="/Eskooly/sms-settings3.png" alt="Sms Settings" class="w-full rounded-lg shadow-md border border-gray-50" />
                    </li>
                </ol>
              </div>`
            },
            {
                slug: "weekend", title: "Weekend", content: `
              <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">Weekend</h3>
                <img src="/Eskooly/weekend.png" alt="Weekend" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-4 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Weekend</span>
                        <p class="mt-1">You can edit weekend.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Checked Weekend</span>
                        <p class="mt-1">If you want to set satureday is weekend day, then you have to edit that day and checked as weekend and update your data.</p>
                    </li>
                </ol>
              </div>`
            },
            {
                slug: "language-settings", title: "Language Settings", content: `
              <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">Language Settings</h3>
                <img src="/Eskooly/language-settings.png" alt="Language Settings" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-4 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Language</span>
                        <p class="mt-1">You can add multiple languages. Select language and add into system.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Default</span>
                        <p class="mt-1">You can make it default. After making default, system will converted into default language</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Language Setup</span>
                        <p class="mt-1">You can setup your custom language</p>
                        <img src="/Eskooly/language-setup.png" alt="Language Settings" class="w-full rounded-lg shadow-md border border-gray-50" />
                    </li>
                        <span class="font-bold text-[#581C87]/70">1. Chnage language Phrases</span>
                        <p class="mt-1">You can change phrases according to your language</p>
                </ol>
              </div>`
            },
            {
                slug: "backup", title: "Backup", content: `
              <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">Backup</h3>
                <img src="/Eskooly/backup.png" alt="Backup" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-4 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Backup</span>
                        <p class="mt-1">You can create backup from your system, You can also resote data from your local pc.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Images Backup</span>
                        <p class="mt-1">You can create all images backup from your system, You can also download into your local PC for safety.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Whole System Backup</span>
                        <p class="mt-1">You can create whole system backup.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Database Backup</span>
                        <p class="mt-1">You can also create database backup and download, restore, and delete</p>
                    </li>
                </ol>
              </div>`
            },
            {
                slug: "update-system", title: "Update System", content: `
              <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">Update System</h3>
                <img src="/Eskooly/update-system.png" alt="Update System" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-4 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Update System</span>
                        <p class="mt-1">If update version is available, then you can upgrade from here.</p>
                    </li>
                </ol>
              </div>`
            }
        ]
    },
    {
        category: "Dormitory",
        items: [
            {
                slug: "dormitory-rooms", title: "Dormitory Rooms", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Dormitory Rooms</h3>
                        <img src="/Eskooly/dormitory-rooms.png" alt="Add Dormitory Rooms" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add Dormitory Rooms</span>
                        <p class="mt-1 mb-3">Super admin can add dormitory Rooms which should have to include dormitory name, room number, room type, bed number and it's cost.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Select Action</span>
                        <p class="mt-1 mb-3">In the dormitory room list, super admin can able to edit and delete the dormitory room information.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "dormitory-list", title: "Dormitory List", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Dormitory List</h3>
                        <img src="/Eskooly/dormitory-list.png" alt="Add Dormitory" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add Dormitory</span>
                        <p class="mt-1 mb-3">For adding dormitory super admin need to add dormitory name,type and how much allotment are possible in this dormitory.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Select Actions</span>
                        <p class="mt-1 mb-3">Edit and delete option are permitted for super admin.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "room-type", title: "Room Type", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Room Type</h3>
                        <img src="/Eskooly/room-type.png" alt="Add Room Type" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add Room Type</span>
                        <p class="mt-1 mb-3">Which kinds of rooms are available in the dormitory, super admin can add this.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Select Actions</span>
                        <p class="mt-1 mb-3">Super admin can edit and delete the room type list.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "student-dormitory-report", title: "Student Dormitory Report", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Student Dormitory Report</h3>
                <img src="/Eskooly/student-transport-report.png" alt="Search Student Dormitory Report" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Search Student Dormitory Report</span>
                        <p class="mt-1 mb-3">For searching student dormitory list class, section and dormitory name should have to select.</p>
                    </li>
                </ol>
            </div>` }
        ]
    },
    {
        category: "Transport",
        items: [
            {
                slug: "transport-route", title: "Transport Route", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Transport Route</h3>
                <img src="/Eskooly/add-route.png" alt="Routes" class="w-full rounded-lg shadow-md border border-gray-50" />
                <div class="space-y-4">
                <h1 class="text-lg font-bold text-[#581C87]/70">Transport Route</h1>
                    <p class="font-bold text-[#581C87]/70">This module has 3 sections -</p>
                    <ul class="list-disc pl-5 space-y-1 text-[#581C87]/70">
                        <li>Routes</li>
                        <li>Vehicles</li>
                        <li>Assign Vehicle</li>
                        <li>Student Transport Report</li>
                    </ul>
                    <p class="text-[#581C87]/70">First we will add Routes then add Vehicles then Assign Vehicle on Routes then check Student Transport Report.</p>
                    
                    <div class="space-y-4 mt-4 text-[#581C87]/70">
                        <p><span class="font-bold text-[#581C87]/70">Routes -</span> Go to Transport > Routes enter Route Title, Fare & click Save button. All the routes can be see right side at this page.</p>
                        
                        <p>Go to Transport > Vehicles enter Vehicle No, Vehicle Model, Year Made, Driver Name, Driver License, Driver Contact, Note & click Save button. All the vehicles can be see right side at this page.</p>
                        
                        <p><span class="font-bold text-[#581C87]/70">Student Transport Report -</span> Go to Student Information > Student Transport Report here you can view all students list who has availed transport facility.</p>
                    </div>
                </div>
            </div>` },
            {
                slug: "vehicle", title: "Vehicle", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Vehicle</h3>
                <img src="/Eskooly/vehicle.png" alt="Add Vehicle" class="w-full rounded-lg shadow-md border border-gray-50" />
            </div>` },
            {
                slug: "assign-vehicle", title: "Assign Vehicle", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Assign Vehicle</h3>
                <img src="/Eskooly/assign-vehicle.png" alt="Assign Vehicle" class="w-full rounded-lg shadow-md border border-gray-50" />
            </div>` },
            {
                slug: "student-transport-report", title: "Student Transport Report", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Student Transport Report</h3>
                <img src="/Eskooly/student-transport-report (1).png" alt="Student Transport Report" class="w-full rounded-lg shadow-md border border-gray-50" />
            </div>` }
        ]
    },
    {
        category: "Inventory",
        items: [
            {
                slug: "item-category", title: "Item Category", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Item Category</h3>
                <img src="/Eskooly/item-category-list.png" alt="Add Item Category" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add Item Category</span>
                        <p class="mt-1 mb-3">To add item category super admin should add category name. By Clicking Select in action column super admin can get the option of delete and edit.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "item-list", title: "Item List", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Item List</h3>
                <img src="/Eskooly/item.png" alt="Add Item List" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add Item List</span>
                        <p class="mt-1 mb-3">In Item List Submodule, to submit an item need to add item name, select an item category which is added in item category submodule.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Select action</span>
                        <p class="mt-1 mb-3">Super admin can edit and delete the item list.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "item-store", title: "Item Store", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Item Store</h3>
                <img src="/Eskooly/item-store.png" alt="Add Item Store" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add Item Store</span>
                        <p class="mt-1 mb-3">Store name is essential for adding item store and store number is the identity of the store.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Select action</span>
                        <p class="mt-1 mb-3">Super admin can edit and delete the item store.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "supplier", title: "Supplier", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Supplier</h3>
                <img src="/Eskooly/supplier.png" alt="Add Supplier" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add Supplier</span>
                        <p class="mt-1 mb-3">For adding supplier, supplier's company name, name, mobile number, email address is needed to submit.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Select Action</span>
                        <p class="mt-1 mb-3">Super admin can edit and delete the supplier list.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "item-receive", title: "Item Receive", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Item Receive</h3>
                <img src="/Eskooly/item-receive.png" alt="Receive Details" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Receive Details</span>
                        <p class="mt-1 mb-3">At first select supplier which is come from the supplier list that is added by super admin. Select the available store or warehouse which also added by super admin in the item store submodule. Then need to add the reference number, receive date.<br> After that select the item from the item list which is listed in item list submodule, put it's unit price, quantity. Sub total will show the individual item's total price. After adding all sub total the final result will be shown. <br>If check the full paid option no due will be shown. If not, then put the amount in total paid field. If it's meet up the total due will zero, if not then due or surplus amount will show in the total due field. Payment method can also be selected in this operation.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add Item</span>
                        <p class="mt-1 mb-3">By just clicking the add button, new item will be added in the calculation process.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "item-receive-list", title: "Item Receive List", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Item Receive List</h3>
                        <img src="/Eskooly/item-receive-list.png" alt="Paid and Unpaid Status" class="w-full rounded-lg shadow-md border border-gray-50" />
                        <img src="/Eskooly/purchase-details.png" alt="Purchase Details" class="w-full rounded-lg shadow-md border border-gray-50" />
                        <img src="/Eskooly/add-payment.png" alt="Purchase Details" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Paid and Unpaid Status</span>
                        <p class="mt-1 mb-3">In the item receive list paid or unpaid status is shown. If payment is complete then the status show paid, if not then show unpaid</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Select Actions</span>
                        <p class="mt-1 mb-3">In this list, view purchase details, edit and delete the list, if unpaid then add payment and view payment are included in action.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">New Item Receive</span>
                        <p class="mt-1 mb-3">By clicking the new item receive button, easily can add a new item receive.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Purchase Receipt</span>
                        <p class="mt-1 mb-3">To see the purchase receipt, just click the view option in the action column for individual item receive then can possible to see the purchase detail information.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add Payment</span>
                        <p class="mt-1 mb-3">If any amount of due remains then we can complete the payment by clicking the add payment in the action column. After that we can fill up the payment through a particular payment method.In this case of operation reference number should be added.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "item-sell-list", title: "Item Sell List", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Item Sell List</h3>
                        <img src="/Eskooly/item-sell.png" alt="Paid and Unpaid Status" class="w-full rounded-lg shadow-md border border-gray-50" />
                        <img src="/Eskooly/item-sell1.png" alt="Paid and Unpaid Status" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Paid and Unpaid Status</span>
                        <p class="mt-1 mb-3">In the item sell list paid or unpaid status is shown. If payment is complete then the status show paid, if not then show unpaid</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Select Actions</span>
                        <p class="mt-1 mb-3">Action column in this list, super admin can able to see sell details in view option, edit and delete the list and if unpaid then able to add payment and view payment.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">New Item Sell</span>
                        <p class="mt-1 mb-3">By clicking the new item sell button, easily can add a new item's sell information.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Item Sell</span>
                        <p class="mt-1 mb-3">At first select the person who buy the item, whom are added by super admin. Then need to add the reference number, receive date of selling.<br> After that select the item from the item list which is listed in item list submodule, put it's unit price, quantity. Sub total will show the individual item's total price. After adding all sub total the final result will be shown. <br>If check the full paid option no due will be shown. If not, then put the amount in total paid field. If it's meet up the total due will zero, if not then due or surplus amount will show in the total due field. Payment method can also be selected in this operation. After done the submission the sell information will be listed in item sell list.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "issue-item", title: "Issue Item", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Issue Item</h3>
                        <img src="/Eskooly/issue-a-item.png" alt="Issue a Item" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Issue a Item</span>
                        <p class="mt-1 mb-3">Which item is issued for which person should have to add in the begin of the form. For Submission which kind of user,his name and if he is studentthen his class,section also mandatory. Issue and return date, item category, item name and it's quantity should have to submit before final submission.<br> After submission the issued item list is shown here. If super admin wants, he can return the issued item. Status will show which item is issued and return.</p>
                    </li>
                </ol>
            </div>` }
        ]
    },
    {
        category: "Library",
        items: [
            {
                slug: "add-book", title: "Add Book", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Add Book</h3>
                        <img src="/Eskooly/add-book.png" alt="Add Book" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add Book</span>
                        <p class="mt-1 mb-3">Super admin can add book which is available in the library. For adding book, book title, category, subject is mandatory. For proper book details information need to fill up all the field in this form.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "book-list", title: "Book List", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Book List</h3>
                        <img src="/Eskooly/book-list.png" alt="Book List" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Book List</span>
                        <p class="mt-1 mb-3">All the books which are available in the library are shown in this book list.Super Admin can edit and delete the book information if he wants.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "book-categories", title: "Book Categories", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Book Categories</h3>
                        <img src="/Eskooly/book-categories.png" alt="Book Categories" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Book Categories</span>
                        <p class="mt-1 mb-3">If Super admin wants he can add new book category in this submodule. All the book category list is shown in Category list.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "add-member", title: "Add Member", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Add Member</h3>
                        <img src="/Eskooly/add-member.png" alt="Add Member" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add Member</span>
                        <p class="mt-1 mb-3">Super admin can add new library member. In this case member type and member id is necessary to fill up.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Cancel member list</span>
                        <p class="mt-1 mb-3">Library member lists are shown in member list. Super admin can cancel the member if he wants.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "issue-books", title: "Issue Books", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Issue Books</h3>
                        <img src="/Eskooly/issue-books.png" alt="Issue Books" class="w-full rounded-lg shadow-md border border-gray-50" />
                        <img src="/Eskooly/issued-books.png" alt="Issue Books" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Issue Books</span>
                        <p class="mt-1 mb-3">All the members of the library are shown in this list. Where super admin can issue or return book/books to him.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Issue or Return Books</span>
                        <p class="mt-1 mb-3">By clicking the Issue/Return Books super admin can able to issue book to the library member and if want he can return book.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "issued-book-list", title: "Issued Book List", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Issued Book List</h3>
                        <img src="/Eskooly/issued-book-list.png" alt="Issued Book List" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Search Issued books</span>
                        <p class="mt-1 mb-3">By selecting book name or book id or subject super admin can see the issued book list.</p>
                    </li>
                </ol>
            </div>` }
        ]
    },
    {
        category: "Communicate",
        items: [
            {
                slug: "notice-board", title: "Notice Board", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Notice Board</h3>
                        <img src="/Eskooly/notice-board.png" alt="Notice Board" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">All notices</span>
                        <p class="mt-1 mb-3">Super admin can see all the notices which is select for.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add notice</span>
                        <p class="mt-1 mb-3">super admin can add new notice by clicking the add notice button.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "send-message", title: "Send Message", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Send Message</h3>
                <img src="/Eskooly/add_notice.png" alt="Add notices" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add notices</span>
                        <p class="mt-1 mb-3">To add new notice at first type the notice title, then write the message content. Notice date and publication date should have to select. Select the notice viewer in the message to section. <br>By clicking the Notice board button in the top-right then can able to go notice board list.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "send-email", title: "Send Email", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Send Email</h3>
                <img src="/Eskooly/send-email1.png" alt="Send email or SMS (Group)" class="w-full rounded-lg shadow-md border border-gray-50" />
                        <img src="/Eskooly/send-email2.png" alt="Send email or SMS (Individual)" class="w-full rounded-lg shadow-md border border-gray-50" />
                        <img src="/Eskooly/send-email3.png" alt="Send email or SMS (Class)" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Send email or SMS (Group)</span>
                        <p class="mt-1 mb-3">Super admin can send email or sms by checking in send through check box. Title and description is also mandatory field.<br> If he wants to send this to several receiver then he can select several receiver in the group section.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Send email or SMS (Individual)</span>
                        <p class="mt-1 mb-3">If he wants to send this to individual receiver or certain role receiver then he can select role of the receiver and select the name or names in the individual section.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Send email or SMS (Class)</span>
                        <p class="mt-1 mb-3">If he wants to send this to particular class students then he can select a class and certain section in the class section.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "email-sms-log-list", title: "Email / Sms Log List", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Email / Sms Log List</h3>
                <img src="/Eskooly/log.png" alt="Email / Sms Log List" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Email / Sms Log List</span>
                        <p class="mt-1 mb-3">All the email and sms which is send that are listed here. If wants to send new email or sms then just click the Send Email/Sms button.<br> In the list, email or sms receiver list are shown. This are group, individual and class.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "event-list", title: "Event List", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Event List</h3>
                <img src="/Eskooly/event.png" alt="Add Event" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add Event</span>
                        <p class="mt-1 mb-3">To add event, event title, start date, end date and description are needed. The event list will show all the event which are added.In the list, event can be edit and delete are possible.</p>
                    </li>
                </ol>
            </div>` }
        ]
    },
    {
        category: "Homework",
        items: [
            {
                slug: "add-homework", title: "Add Homework", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Add Homework</h3>
                <img src="/Eskooly/add-homework.png" alt="Add Homework" class="w-full rounded-lg shadow-md border border-gray-50" />
                        <img src="/Eskooly/homework-list.png" alt="Select Action" class="w-full rounded-lg shadow-md border border-gray-50" />
                        <img src="/Eskooly/evaluation.png" alt="Search Homework list" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add Homework</span>
                        <p class="mt-1 mb-3">To add homework, class, section, subjects, date, submission date, marks and description are needed to submit.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Select Action</span>
                        <p class="mt-1 mb-3">In the action column, evaluation, edit and delete options are include.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Search Homework list</span>
                        <p class="mt-1 mb-3">To search homework list, class, section, subject are needed to select.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add homework</span>
                        <p class="mt-1 mb-3">By clicking the add homework super admin can add new homework.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Evaluation homework</span>
                        <p class="mt-1 mb-3">Super admin can evaluate the homework by clicking the evaluation option in action column.In evaluation homework, students are evaluated by marks, comments, homework status.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Evaluation Date</span>
                        <p class="mt-1 mb-3">Evaluation date should have to select before evaluation page submit.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "homework-evaluation-report", title: "Homework Evaluation Report", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Homework Evaluation Report</h3>
                        <img src="/Eskooly/homework-evaluation-report.png" alt="Search Homework Evaluation Report" class="w-full rounded-lg shadow-md border border-gray-50" />
                        <img src="/Eskooly/view.png" alt="Search Homework Evaluation Report" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Search Homework Evaluation Report</span>
                        <p class="mt-1 mb-3">To search homework evaluation report, class, section, subjects should have to select.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Select Action</span>
                        <p class="mt-1 mb-3">Homework evaluation report list are show the search result. By clicking view option full evaluation of a particular home can be seen.</p>
                    </li>
                </ol>
            </div>` }
        ]
    },
    {
        category: "Academics",
        items: [
            {
                slug: "class-routine", title: "Class Routine", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Class Routine</h3>
                        <img src="/Eskooly/class-routine.png" alt="Add Class routine" class="w-full rounded-lg shadow-md border border-gray-50" />
                        <img src="/Eskooly/create-class-routine.png" alt="Add Class routine" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add Class routine</span>
                        <p class="mt-1 mb-3">In the class routine submodule, by selecting the class and section super admin can see the particular class routine. Where by clicking on the (+) symbol admin can assign the class routine.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Assigned Class routine</span>
                        <p class="mt-1 mb-3">Assigned class for particular day and period are shown on the class routine list.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Create Class routine</span>
                        <p class="mt-1 mb-3">To create class routine just click on the particular period of a day. Here have to select subject, teacher and class room.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "assign-subject", title: "Assign Subject", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Assign Subject</h3>
                        <img src="/Eskooly/assign-subject.png" alt="Search Assigned Subject" class="w-full rounded-lg shadow-md border border-gray-50" />
                        <img src="/Eskooly/add-assign-subject.png" alt="Search Assign Subject Create" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Search Assigned Subject</span>
                        <p class="mt-1 mb-3">Select class and section for searching assigned subjects for particular class and it's individual section.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Assigned Subject List</span>
                        <p class="mt-1 mb-3">In this list, particular subjects and it's assigned course teachers are shown. If assign new subjects just click the right-top assign Subject button.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Search Assign Subject Create</span>
                        <p class="mt-1 mb-3">For assign subjects list, search by selecting the class and section.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Assign Subject Create</span>
                        <p class="mt-1 mb-3">For assign subject select the teacher in the teacher section.By clicking the delete button, subject will be deleted.By clicking the save button the subjects will assigned.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "assign-class-teacher", title: "Assign Class Teacher", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Assign Class Teacher</h3>
                        <img src="/Eskooly/assign-class-teacher.png" alt="Assign Class Teacher" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Assign Class Teacher</span>
                        <p class="mt-1 mb-3">For assigning class routine, class, section and teachers should have to select. The Assigned class teacher list will show in the Class Teacher List. Here teacher list can be edited and deleted.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "subject", title: "Subject", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Subject</h3>
                        <img src="/Eskooly/add-subjects.png" alt="Add Subject" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add Subject</span>
                        <p class="mt-1 mb-3">To add subject, the subject name,the subject code should be added and check the theory or practical which type of subject is it. <br>Subject list can be edited and deleted by the super admin.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "class", title: "Class", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Class</h3>
                        <img src="/Eskooly/class.png" alt="Add Class" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add Class</span>
                        <p class="mt-1 mb-3">To add Class, the class name and section or sections should be added. <br>Class list can be edited and deleted by the super admin.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "sections", title: "Sections", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Sections</h3>
                         <img src="/Eskooly/sections.png" alt="Add Section" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add Section</span>
                        <p class="mt-1 mb-3">To add section, the section name should be added.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Select Section</span>
                        <p class="mt-1 mb-3">Section list can be edited and deleted by the super admin.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "class-room", title: "Class Room", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Class Room</h3>
                         <img src="/Eskooly/class-room.png" alt="Add Class Room" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add Class Room</span>
                        <p class="mt-1 mb-3">To add class room, room number and capacity should be added.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Select Section</span>
                        <p class="mt-1 mb-3">Class room list can be edited and deleted by the super admin.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "class-exam-time-setup", title: "Class & Exam Time Setup", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Class & Exam Time Setup</h3>
                        <img src="/Eskooly/add-time.png" alt="Add Time" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add Time</span>
                        <p class="mt-1 mb-3">To add time, time type, period, start and ending time should be added.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Select Section</span>
                        <p class="mt-1 mb-3">Time list can be edited and deleted by the super admin.</p>
                    </li>
                </ol>
            </div>` }
        ]
    },
    {
        category: "Examination",
        items: [
            {
                slug: "add-exam", title: "Add Exam", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Add Exam</h3>
                        <img src="/Eskooly/add-exam.png" alt="Add Examination Name" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add Examination Name</span>
                        <p class="mt-1 mb-3">Super admin can add examination name. He has been allowed to edit and delete the examination name.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Exam Setup</span>
                        <p class="mt-1 mb-3">By clicking the Exam Setup button super admin can enter the exam setup page.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "exam", title: "Exam", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Exam</h3>
                        <img src="/Eskooly/exam-setup1.png" alt="Add Exam" class="w-full rounded-lg shadow-md border border-gray-50" />
                        <img src="/Eskooly/exam-setup2.png" alt="Add Exam" class="w-full rounded-lg shadow-md border border-gray-50" />
                        <img src="/Eskooly/exam-setup3.png" alt="Add Exam" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add Exam</span>
                        <p class="mt-1 mb-3">To exam setup, firstly select the class or classes then select the corresponding section or sections,secondly select the particular subjects or subject then select the exam type. Total mark of the particular exam should have to setup in the exam mark field. <br>To distribute the exam marks, We have to identify the how much marks in which exam category, like written exam has 70, class test has 20, homework has 10 and the total marks will show in Total field. The marks can't cross the exam marks.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Exam List</span>
                        <p class="mt-1 mb-3">In the exam list, exam's all information are shown in details. Super admin can delete the exam list.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "exam-schedule", title: "Exam Schedule", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Exam Schedule</h3>
                        <img src="/Eskooly/exam-schedule.png" alt="Add Exam Schedule" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add Exam Schedule</span>
                        <p class="mt-1 mb-3">By Clicking the right-top button add exam schedule super admin enter the exam setup schedule page.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Search Exam Schedule</span>
                        <p class="mt-1 mb-3">To search the exam schedule super admin have to select the exam name, class and section. The assigned exam routine is shown in the exam schedule section.</p>
                        <img src="/Eskooly/exam-schedule2.png" alt="Search for Set Exam Schedule" class="w-full rounded-lg shadow-md border border-gray-50" />
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Search for Set Exam Schedule</span>
                        <p class="mt-1 mb-3">After clicking the add exam schedule button super will enter Exam Schedule create page. In this page, by selecting the exam name, class and section super admin will get the set exam schedule section.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Assign Exam Schedule</span>
                        <p class="mt-1 mb-3">To assign exam schedule just click the (+) symbol, then super admin will get the create exam routine modal.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Assigned exam Schedule</span>
                        <p class="mt-1 mb-3">If any exam schedule is assigned then the assigned exam schedule is shown in this list.</p>
                        <img src="/Eskooly/exam-schedule3.png" alt="Assign Exam Schedule" class="w-full rounded-lg shadow-md border border-gray-50" />
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Create Exam Routine</span>
                        <p class="mt-1 mb-3">just select the date and the room number super admin can setup the exam routine for particular subject in particular date and time.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "marks-register", title: "Marks Register", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Marks Register</h3>
                        <img src="/Eskooly/mark-register.png" alt="Mark Register" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Mark Register</span>
                        <p class="mt-1 mb-3">In the mark register submodule, super admin can see the mark registered list by searching through selecting the exam name,class and section. By clicking the right-top button add button super admin can enter the fills marks page. To search the certain fill up marks list, super admin have to select exam name, class, section and subject.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">fill up the Marks</span>
                        <p class="mt-1 mb-3">In the Fill up marks lists, All the particular mark sections are included like class test marks, homework marks, written exam etc. If anyone was absent in the examination then just check the is absent. After distribute all marks by submit the save button then marks will be registered.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "exam-attendance", title: "Exam Attendance", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Exam Attendance</h3>
                        <img src="/Eskooly/exam-attendance.png" alt="Attendance Create" class="w-full rounded-lg shadow-md border border-gray-50" />
                        <img src="/Eskooly/exam-attendance1.png" alt="Attendance Status" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Attendance Create</span>
                        <p class="mt-1 mb-3">By clicking the exam attendance button, super admin can able to enter the exam attendance setup page.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Search Exam Attendance</span>
                        <p class="mt-1 mb-3">To search the certain exam attendance have to select the exam name, class, section and subject.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Attendance Status</span>
                        <p class="mt-1 mb-3">Exam attendance list will show the the search result. in this list, attendance column will show which student was present or absent in this particular exam.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Setup Exam Attendance</span>
                        <p class="mt-1 mb-3">To get the desire exams attendance setup section just select the exam name, class, section and subject. in this attendance setup section, super admin can check the absent or present option button.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "marks-grade", title: "Marks Grade", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Marks Grade</h3>
                <img src="/Eskooly/mark-grade.png" alt="Marks Grade" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add Grade</span>
                        <p class="mt-1 mb-3">To add certain mark's grade,super admin need to add grade name,it's GPA, percentage range etc.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Select Section</span>
                        <p class="mt-1 mb-3">Super admin can edit and delete the grade list.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "question-group", title: "Question Group", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Question Group</h3>
                <img src="/Eskooly/question-group.png" alt="Question Group" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add Question Group</span>
                        <p class="mt-1 mb-3">To add question, super admin have to include the question group name.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Select Section</span>
                        <p class="mt-1 mb-3">Super admin can edit and delete the question group list.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "question-bank", title: "Question Bank", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Question Bank</h3>
                <img src="/Eskooly/question-bank.png" alt="Question Bank" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Question Bank</span>
                        <p class="mt-1 mb-3">To add question bank,super admin need to select question group,class, section, question type, question name and it's marks.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Select Section</span>
                        <p class="mt-1 mb-3">Super admin can edit and delete the question bank list.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "online-exam", title: "Online Exam", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Online Exam</h3>
                <img src="/Eskooly/online-exam.png" alt="Online Exam" class="w-full rounded-lg shadow-md border border-gray-50" />
                <img src="/Eskooly/question-list.png" alt="Online Exam" class="w-full rounded-lg shadow-md border border-gray-50" />
                <img src="/Eskooly/view-question.png" alt="Online Exam" class="w-full rounded-lg shadow-md border border-gray-50" />
                <img src="/Eskooly/marking.png" alt="Online Exam" class="w-full rounded-lg shadow-md border border-gray-50" />
                <img src="/Eskooly/result-view.png" alt="Online Exam" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add Online Exam</span>
                        <p class="mt-1 mb-3">To add online exam, exam title, class, section, subjects, date, start and end time, minimum percentage and the exam's instruction.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Publication status</span>
                        <p class="mt-1 mb-3">In the online exam list, publication status will show the examination is published or pending</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Select Action</span>
                        <p class="mt-1 mb-3">Manage question, mark register, edit and delete can allow for super admin in the action column.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">View Result</span>
                        <p class="mt-1 mb-3">By just clicking the view result, result will be shown.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Save question</span>
                        <p class="mt-1 mb-3">After clicking the manage question option,super admin can enter the question list page where admin can save the question for particular online examination.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">view Question</span>
                        <p class="mt-1 mb-3">Super admin can see the details of the selected question.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">View question Modal</span>
                        <p class="mt-1 mb-3">In this modal,Super admin can see the details of the selected question.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Marking</span>
                        <p class="mt-1 mb-3">Super admin can see the marks setup list of the participant, super admin can add exam mark of the individual.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Result View</span>
                        <p class="mt-1 mb-3">By clicking the view result button, super admin can see the full result sheet.</p>
                    </li>
                </ol>
            </div>` }
        ]
    },
    {
        category: "Leave Application",
        items: [
            {
                slug: "approve-leave-request", title: "Approve Leave Request", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Approve Leave Request</h3>
                        <img src="/Eskooly/Approve-Leave-Request.png" alt="Approve Leave Request" class="w-full rounded-lg shadow-md border border-gray-50" />
                        <img src="/Eskooly/view (1).png" alt="Approve Leave Request" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Approve Leave Request</span>
                        <p class="mt-1 mb-3">Super admin can approve the leave request on this page. By clicking the view icon he can approve the request from the leave request list.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Select Action</span>
                        <p class="mt-1 mb-3">In this Action column, view/edit and delete options are includes.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">View or Edit Leave Details</span>
                        <p class="mt-1 mb-3">In this modal, super admin can see the detail and he change the approve status if he wants.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "apply-leave", title: "Apply Leave", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Apply Leave</h3>
                        <img src="/Eskooly/apply-leave.png" alt="Apply Leave" class="w-full rounded-lg shadow-md border border-gray-50" />
                        <img src="/Eskooly/view-leave-details.png" alt="Leave List" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">My remaining leave</span>
                        <p class="mt-1 mb-3">In this list, super admin can see his remaining days of leave, extra taken leave and the total days for a particular leave type.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add Apply leave</span>
                        <p class="mt-1 mb-3">Super admin can the apply leave, by adding the date, leave type, which date to which date, the reason etc.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Select Action</span>
                        <p class="mt-1 mb-3">The leave list will show all the leaves which is available.In this list, view/edit and delete options are includes in action column.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "leave-define", title: "Leave Define", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Leave Define</h3>
                        <img src="/Eskooly/leave-define.png" alt="Add Leave Define" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add Leave Define</span>
                        <p class="mt-1 mb-3">Super admin can add leave define. He has to select the role and leave type. Then he has to put the days of leave.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Select Action</span>
                        <p class="mt-1 mb-3">Super admin can edit and delete the leave define information.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "leave-type", title: "Leave Type", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Leave Type</h3>
                        <img src="/Eskooly/leave-type.png" alt="Add Leave Type" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add Leave Type</span>
                        <p class="mt-1 mb-3">By adding the Type name and the total days super admin can able to add the leave type.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Select Action</span>
                        <p class="mt-1 mb-3">The leave type list is shown all the leaves type.In this list, edit and delete options are includes in action column.</p>
                    </li>
                </ol>
            </div>` }
        ]
    },
    {
        category: "Human Resource",
        items: [
            {
                slug: "staff-list", title: "Staff List", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Staff List</h3>
                        <img src="/Eskooly/staff_directory.png" alt="Search Staff List" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Search Staff List</span>
                        <p class="mt-1 mb-3">To search the staff list,staff roles or staff id or staff name have to select.<br>In the action column in this list, super admin can view staff details, edit and delete the records.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add Staff</span>
                        <p class="mt-1 mb-3">By clicking the add staff button, super can enter the add staff page.</p>
                        <p class="mt-1 mb-3">To add a staff, basic info, payroll, bank info, social links and necessary documents have to include.</p>
                        <img src="/Eskooly/add_staff1.png" alt="Add Staff" class="w-full rounded-lg shadow-md border border-gray-50" />
                        <img src="/Eskooly/add_staff2.png" alt="Add Staff" class="w-full rounded-lg shadow-md border border-gray-50" />
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Profile</span>
                        <p class="mt-1 mb-3">Staff has several types of information. His profile is one of them. In his profile all the personal information are shown.</p>
                        <p class="mt-1 mb-3">By Clicking the right-top button edit, possible to enter in edit staff details page.If wants can easily edit the staff records.</p>
                        <img src="/Eskooly/profile.png" alt="Edit Staff" class="w-full rounded-lg shadow-md border border-gray-50" />
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Payroll</span>
                        <p class="mt-1 mb-3">Payroll information of a particular staff are shown in this page.</p>
                        <img src="/Eskooly/payroll.png" alt="Payroll" class="w-full rounded-lg shadow-md border border-gray-50" />
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Documents</span>
                        <p class="mt-1 mb-3">How much and which documents are downloaded in his profile are shown here.</p>
                        <img src="/Eskooly/documents.png" alt="Documents" class="w-full rounded-lg shadow-md border border-gray-50" />
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Timeline</span>
                        <p class="mt-1 mb-3">Timeline information of a particular staff are shown in this page.</p>
                        <img src="/Eskooly/timeline.png" alt="Timeline" class="w-full rounded-lg shadow-md border border-gray-50" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "staff-attendance", title: "Staff Attendance", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Staff Attendance</h3>
                        <img src="/Eskooly/staff_attendance.png" alt="Search" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Search Staff Attendance</span>
                        <p class="mt-1 mb-3">To search staff attendance, user needs to select the role and attendance date.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Mark Holiday</span>
                        <p class="mt-1 mb-3">If the selected day is holiday,then by checking the mark holiday button, the day will be marked as holiday.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Save Attendance</span>
                        <p class="mt-1 mb-3">After selecting the all the functionalities, just click the save attendance button and the attendance will be recorded.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "staff-attendance-report", title: "Staff Attendance Report", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Staff Attendance Report</h3>
                        <img src="/Eskooly/staff_attendance-report.png" alt="Search" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Search Staff Attendance Report</span>
                        <p class="mt-1 mb-3">To search the staff attendance report,select the role, month and the year. In this list full month attendance record of a particular staff are shown.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "payroll", title: "Payroll", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Payroll</h3>
                        <img src="/Eskooly/payroll_page.png" alt="Salary Template" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Payroll Search</span>
                        <p class="mt-1 mb-3">For searching the staff payroll list, just select the role,month and the year.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Staff List</span>
                        <p class="mt-1 mb-3">Staff payroll list show the search result. In this list, payroll status show payroll is generated or not. If not then just clicking the generate payroll super admin can enter the generate payroll page.</p>
                        <img src="/Eskooly/generate_payroll.png" alt="Salary Assign" class="w-full rounded-lg shadow-md border border-gray-50" />
                        <img src="/Eskooly/generate_payroll1.png" alt="Salary Payment" class="w-full rounded-lg shadow-md border border-gray-50" />
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Generate Payroll</span>
                        <p class="mt-1 mb-3">In the generate payroll page, earning, deductions, payroll summary should have to full up when generate payroll.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "payroll-report", title: "Payroll Report", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Payroll Report</h3>
                        <img src="/Eskooly/payroll_report.png" alt="Search Payroll" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Search payroll Report</span>
                        <p class="mt-1 mb-3">For searching the staff payroll report list, just select the role, month and the year.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Staff List</span>
                        <p class="mt-1 mb-3">Staff payroll report list show the search result. In this list, payroll's all the information of staff are shown.</p>
                    </li>
                </ol>
            </div>` }
        ]
    },
    {
        category: "Profit",
        items: [
            {
                slug: "profit", title: "Profit", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Profit</h3>
                        <img src="/Eskooly/profit.png" alt="Profit" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Search Profit</span>
                        <p class="mt-1 mb-3">For searching the Profit list, select the certain date range means which date to date wants to see the profit list.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Profit List</span>
                        <p class="mt-1 mb-3">Profit list show the searched time's income, expense and profit list.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "income", title: "Income", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Income</h3>
                        <img src="/Eskooly/income.png" alt="Add Income" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add Income</span>
                        <p class="mt-1 mb-3">To add income information income source name, account head, payment method, date and amount should have to include.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Select Actions</span>
                        <p class="mt-1 mb-3">Edit and delete are includes in the action column in this list.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "expense", title: "Expense", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Expense</h3>
                        <img src="/Eskooly/expense.png" alt="Add Expense" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add Expense</span>
                        <p class="mt-1 mb-3">To add expense information, expense source name, account head, payment method, date and amount should have to include.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Select Actions</span>
                        <p class="mt-1 mb-3">Edit and delete are includes in the action column in this list.</p>
                    </li>
                </ol>
            </div>` }
        ]
    },
    {
        category: "Accounts",
        items: [
            {
                slug: "search-income-expense", 
                title: "Search Income/Expense", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Search Income/Expense</h3>
                <img src="/Eskooly/search.png" alt="Search Income/Expense" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Search Income/Expense</span>
                        <p class="mt-1 mb-3">To search the income or expense select certain date,select income or expense and select the income/expense name.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Income/Expense Result</span>
                        <p class="mt-1 mb-3">Search result are shown in this list. Where individual information and grand total are shown.</p>
                    </li>
                </ol>
            </div>` 
            },
            {
                slug: "chart-of-account", 
                title: "Chart Of Account", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Chart Of Account</h3>
                <img src="/Eskooly/chart-of-account.png" alt="Chart Of Account" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add Chart Of Account</span>
                        <p class="mt-1 mb-3">To add chart of account, account head and account type should have to include.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Select Actions</span>
                        <p class="mt-1 mb-3">Edit and delete are includes in the action column in this list.</p>
                    </li>
                </ol>
            </div>` 
            },
            {
                slug: "payment-method", 
                title: "Payment Method", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Payment Method</h3>
                <img src="/Eskooly/payment_method.png" alt="Payment Method" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add Payment Method</span>
                        <p class="mt-1 mb-3">To add payment method, method name should have to include.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Select Actions</span>
                        <p class="mt-1 mb-3">Edit and delete are includes in the action column in this list.</p>
                    </li>
                </ol>
            </div>` 
            },
            {
                slug: "bank-account", 
                title: "Bank Account", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Bank Account</h3>
                <img src="/Eskooly/add_account.png" alt="Bank Account" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add Bank Account</span>
                        <p class="mt-1 mb-3">To add bank account, account name, opening balance should have to include.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Select Actions</span>
                        <p class="mt-1 mb-3">Edit and delete are includes in the action column in this list.</p>
                    </li>
                </ol>
            </div>` 
            },
            {
                slug: "collect-fees", 
                title: "Collect Fees", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Collect Fees</h3>
                <img src="/Eskooly/collect_fees.png" alt="Collect Fees" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Search Collect Fees</span>
                        <p class="mt-1 mb-3">For Searching the fees collection list, have to select the class and for specific search can possible to select the section and individual information.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Collect Fees</span>
                        <p class="mt-1 mb-3">Search results are shown in the fees collection list. In this list, by clicking the collect fees button, super admin can enter the add fees page.</p>
                        <img src="/Eskooly/collect_fees_action.png" alt="Collect Fees Action" class="w-full rounded-lg shadow-md border border-gray-50" />
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Select Actions</span>
                        <p class="mt-1 mb-3">Through student information, all the unpaid fees are listed here. In the action column add fees and print options are available.</p>
                        <img src="/Eskooly/add_fees.png" alt="Add Fees" class="w-full rounded-lg shadow-md border border-gray-50" />
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add Fees</span>
                        <p class="mt-1 mb-3">By clicking the add fees option, super admin will get the add fees page. Where date, amount, discount group, discount, fine and payment mode is required.</p>
                    </li>
                </ol>
            </div>` 
            },
            {
                slug: "search-fees-payment", 
                title: "Search Fees Payment", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Search Fees Payment</h3>
                <img src="/Eskooly/search_fees_payments.png" alt="Search Fees Payment" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Search Fees Payment</span>
                        <p class="mt-1 mb-3">To search fees payment, have to select the payment id.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Select Actions</span>
                        <p class="mt-1 mb-3">Search result will show the selected payment id's all payment information. User can view the details information by clicking the view option in action column.</p>
                        <img src="/Eskooly/view (3).png" alt="Search Fees Payment View" class="w-full rounded-lg shadow-md border border-gray-50" />
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Print</span>
                        <p class="mt-1 mb-3">In view page, the payment details are shown in the list. Print option is available in this list.</p>
                    </li>
                </ol>
            </div>` 
            },
            {
                slug: "fees-master", 
                title: "Fees Master", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Fees Master</h3>
                <img src="/Eskooly/fees_master.png" alt="Fees Master" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add Fees Master</span>
                        <p class="mt-1 mb-3">To add fees master, fees group, fees type, date and amount are required.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Select Actions</span>
                        <p class="mt-1 mb-3">In the action column, assign/view and delete options are available.</p>
                        <img src="/Eskooly/assign.png" alt="Fees Master Action" class="w-full rounded-lg shadow-md border border-gray-50" />
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Search Fees Assign</span>
                        <p class="mt-1 mb-3">By clicking the assign/view, super admin can enter the fees master assign page. Where super admin can able to assign the fees group.</p>
                    </li>
                </ol>
            </div>` 
            },
            {
                slug: "fees-group", 
                title: "Fees Group", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Fees Group</h3>
                <img src="/Eskooly/fees_group.png" alt="Fees Group" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add Fees Group</span>
                        <p class="mt-1 mb-3">To add fees group, name is required. The fees group represents which kinds of fees should have to pay by students.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Select Actions</span>
                        <p class="mt-1 mb-3">In the fees group list, edit and delete is available.</p>
                    </li>
                </ol>
            </div>` 
            },
            {
                slug: "fees-type", 
                title: "Fees Type", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Fees Type</h3>
                <img src="/Eskooly/fees_type.png" alt="Fees Type" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add Fees Type</span>
                        <p class="mt-1 mb-3">To add fees type, name and fees code are required. The fees group represents which types of fees should have to pay by students.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Select Actions</span>
                        <p class="mt-1 mb-3">In the fees discount list, edit and delete is available.</p>
                    </li>
                </ol>
            </div>` 
            },
            {
                slug: "fees-discount", 
                title: "Fees Discount", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Fees Discount</h3>
                <img src="/Eskooly/fees_discount.png" alt="Fees Discount" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add Fees Discount</span>
                        <p class="mt-1 mb-3">To add fees discount, name, discount code, type and amount are required. The fees discount represents how much discount will be provided for student in which purpose.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Select Actions</span>
                        <p class="mt-1 mb-3">In the fees discount list, assign fees discount, edit and delete is available.</p>
                        <img src="/Eskooly/assign_fees_discount.png" alt="Fees Discount Action" class="w-full rounded-lg shadow-md border border-gray-50" />
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Search Fees Discount For Assign</span>
                        <p class="mt-1 mb-3">By clicking the assign, super admin can enter the fees discount assign page. Where super admin can able to assign the fees discount.</p>
                    </li>
                </ol>
            </div>` 
            },
            {
                slug: "fees-carry-forward", 
                title: "Fees Carry Forward", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Fees Carry Forward</h3>
                <img src="/Eskooly/carry.png" alt="Fees Carry Forward" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Search Fees Carry Forward</span>
                        <p class="mt-1 mb-3">To search the fees carry forward, super admin have to select class name and section.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Previous Session Balance Fees</span>
                        <p class="mt-1 mb-3">Search result will show the previous session balance fees. In this list particular student's balance are shown. Here, super admin can add balance for students.</p>
                    </li>
                </ol>
            </div>` 
            }
        ]
    },
    {
        category: "Download Center",
        items: [
            {
                slug: "upload-content", 
                title: "Upload Content", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Upload Content</h3>
                <img src="/Eskooly/upload_content.png" alt="Upload Content" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Upload content</span>
                        <p class="mt-1 mb-3">To upload content, content type, available for which kinds of person, date the file you want to upload.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Select Actions</span>
                        <p class="mt-1 mb-3">The uploaded content are listed in upload content list. In this list, user can delete and download the content.</p>
                    </li>
                </ol>
            </div>` 
            },
            {
                slug: "assignment", 
                title: "Assignment", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Assignment</h3>
                <img src="/Eskooly/assignment.png" alt="Assignment" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Assignment List</span>
                        <p class="mt-1 mb-3">The uploaded assignment will be shown in the assignment list.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Select Actions</span>
                        <p class="mt-1 mb-3">Delete and download options are available in the action column.</p>
                    </li>
                </ol>
            </div>` 
            },
            {
                slug: "study-material", 
                title: "Study Material", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Study Material</h3>
                <img src="/Eskooly/study_material.png" alt="Study Material" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Study Material List</span>
                        <p class="mt-1 mb-3">The uploaded study material will be shown in the study material list.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Select Actions</span>
                        <p class="mt-1 mb-3">Delete and download options are available in the action column.</p>
                    </li>
                </ol>
            </div>` 
            },
            {
                slug: "syllabus", 
                title: "Syllabus", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Syllabus</h3>
                <img src="/Eskooly/syllabus.png" alt="Syllabus" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Syllabus List</span>
                        <p class="mt-1 mb-3">The uploaded syllabus will be shown in the syllabus list.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Select Actions</span>
                        <p class="mt-1 mb-3">Delete and download options are available in the action column.</p>
                    </li>
                </ol>
            </div>` 
            },
            {
                slug: "other-downloads", 
                title: "Other Downloads", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Other Downloads</h3>
                <img src="/Eskooly/other_download.png" alt="Other Downloads" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Other Downloads List</span>
                        <p class="mt-1 mb-3">The uploaded other download materials will be shown in the other download list.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Select Actions</span>
                        <p class="mt-1 mb-3">Delete and download options are available in the action column.</p>
                    </li>
                </ol>
            </div>` 
            }
        ]
    },
    {
        category: "Student Information",
        items: [
            {
                slug: "student-admission", 
                title: "Student Admission", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Student Admission</h3>
                <img src="/Eskooly/student_admission1.png" alt="Student Admission" class="w-full rounded-lg shadow-md border border-gray-50" />
                <img src="/Eskooly/student_admission2.png" alt="Student Admission" class="w-full rounded-lg shadow-md border border-gray-50" />
                <img src="/Eskooly/student_admission3.png" alt="Student Admission" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Import Student</span>
                        <p class="mt-1 mb-3">For importing new student, super admin have to click the import student button.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add Parents</span>
                        <p class="mt-1 mb-3">For adding new student, super admin have to fill up all the major and pros and cons information. In this case, if new student has any sibling then super admin can able to add the sibling by clicking Add Parents button.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Relation With Guardian</span>
                        <p class="mt-1 mb-3">Who will take the responsibility that have to include in this form. Before admin super admin have to specify the relation with the student.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add Student</span>
                        <p class="mt-1 mb-3">After adding all the information correctly then super admin can able to add the new student by clicking the save student button.</p>
                        <img src="/Eskooly/student_import.png" alt="Student Admission" class="w-full rounded-lg shadow-md border border-gray-50" />
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Download Sample File</span>
                        <p class="mt-1 mb-3">Before import new student information, by clicking the download sample file, super admin can download the sample student information excel file.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Student Import</span>
                        <p class="mt-1 mb-3">For import external information file, super admin have to select the class, section and attach the excel file.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Bulk Import of Students</span>
                        <p class="mt-1 mb-3">Students can be imported from a csv file for adding multiple students at a time. Form the admin panel, under the menu student information, you can get a sub menu 'Student Admission'.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add Parents</span>
                        <p class="mt-1 mb-3">3. Relation With Guardian 4. Add Student/ Admission Admitting new students to the school can be done from ‘admit student’ submenu under ‘student’ in the navigation. For adding a student, admin will need to fill up the information required and provided by the admission form. It should be kept in mind that, admitting new student will automatically create an enrollment in the running session for the selected class. Check and recheck the information you have inserted while adding student because once you admit him/her to a class, you will not be able to change his/her class without promoting him/her to the next session.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Download Sample File</span>
                        <p class="mt-1 mb-3">4.Student Import Clicking there will lead you to a new page. The method of importing is cited on that page. Follow those to successfully import students using a csv file.</p>
                    </li>
                </ol>
            </div>` 
            },
            {
                slug: "student-list", 
                title: "Student List", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Student List</h3>
                <img src="/Eskooly/student_list.png" alt="Student List" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add Student</span>
                        <p class="mt-1 mb-3">To add a new student, just click the right-top add click button.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Search Student</span>
                        <p class="mt-1 mb-3">For searching the individual student have to select the class, section, student name or student roll id. By selecting the class and it's section can able to see the particular section's student list.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Select Student</span>
                        <p class="mt-1 mb-3">In the list, view student's detail information,edit and delete are included in action column.</p>
                        <img src="/Eskooly/student_list2.png" alt="Student List" class="w-full rounded-lg shadow-md border border-gray-50" />
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Student Details</span>
                        <p class="mt-1 mb-3">By clicking the view option in action column, super admin can enter the student's details information page. Where he can able to see the student's details information in different classification.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Sibling Information</span>
                        <p class="mt-1 mb-3">Sibling information is also included in this student detail information page.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Student Profile</span>
                        <p class="mt-1 mb-3">Student information is classified in different section, student profile is one of them. All the personal information are shown in this student profile section.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Edit Student</span>
                        <p class="mt-1 mb-3">If wants, it's possible to edit the student information by clicking the top-rightedit button.</p>
                        <img src="/Eskooly/student_list3.png" alt="Student List" class="w-full rounded-lg shadow-md border border-gray-50" />
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Student Fees</span>
                        <p class="mt-1 mb-3">All the particular student fees information are shown in this portion.</p>
                        <img src="/Eskooly/student_list4.png" alt="Student List" class="w-full rounded-lg shadow-md border border-gray-50" />
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Document</span>
                        <p class="mt-1 mb-3">All the particular student all the document information are shown in this document portion.</p>
                        <img src="/Eskooly/student_list5.png" alt="Student List" class="w-full rounded-lg shadow-md border border-gray-50" />
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Timeline</span>
                        <p class="mt-1 mb-3">All the particular student's timeline information are shown in this timeline portion.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add Timeline</span>
                        <p class="mt-1 mb-3">Add timeline option is available in the timeline page.</p>
                    </li>
                </ol>
            </div>` 
            },
            {
                slug: "student-attendance", 
                title: "Student Attendance", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Student Attendance</h3>
                <img src="/Eskooly/student_attendance.png" alt="Student Attendance" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Search Student Attendance</span>
                        <p class="mt-1 mb-3">To search the student attendance, class, section and the attendance date. Daily attendance is shown on the menu class wise. For taking or viewing attendance for a particular class, firstly admin will need to select the date and the section which will bring the attendance managing form for that class section for that particular date.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Mark Holiday</span>
                        <p class="mt-1 mb-3">If the searched day is holiday then super admin can able to mark the day as holiday by check the mark holiday button.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Save Attendance</span>
                        <p class="mt-1 mb-3">Super admin can able to add attendance students. If anyone absent then check the absent, if present then check the present. Late and half day also can be checked.</p>
                    </li>
                </ol>
            </div>` 
            },
            {
                slug: "student-attendance-report", 
                title: "Student Attendance Report", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Student Attendance Report</h3>
                <img src="/Eskooly/student_attendance-report.png" alt="Student Attendance Report" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Search Student Attendance Report</span>
                        <p class="mt-1 mb-3">To search the student attendance report, class, section, month and year should have to select.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Select Student for Report showing</span>
                        <p class="mt-1 mb-3">The search result will show in this report. If wants to see the individual students attendance then just click on the '+' symbolic button then see the all the days of a month report.</p>
                    </li>
                </ol>
            </div>` 
            },
            {
                slug: "student-category", 
                title: "Student Category", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Student Category</h3>
                <img src="/Eskooly/student_category.png" alt="Student Category" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add Student Category</span>
                        <p class="mt-1 mb-3">For adding student category, student type have to added.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Select Actions</span>
                        <p class="mt-1 mb-3">super admin can able to edit and delete the student category list.</p>
                    </li>
                </ol>
            </div>` 
            },
            {
                slug: "student-group", 
                title: "Student Group", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Student Group</h3>
                <img src="/Eskooly/student_group.png" alt="Student Group" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add Student Group</span>
                        <p class="mt-1 mb-3">For adding student group, student group name have to added.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Select Actions</span>
                        <p class="mt-1 mb-3">super admin can able to edit and delete the student group list.</p>
                    </li>
                </ol>
            </div>` 
            },
            {
                slug: "student-promote", 
                title: "Student Promote", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Student Promote</h3>
                <img src="/Eskooly/student_promote.png" alt="Student Promote" class="w-full rounded-lg shadow-md border border-gray-50" />
                <img src="/Eskooly/student_promote2.png" alt="Student Promote" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Search Student Promote</span>
                        <p class="mt-1 mb-3">To search student promote list, year and class have to select.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">View Academic Performance</span>
                        <p class="mt-1 mb-3">In the list, by clicking the view academic performance button, user can able to see the detail academic performance.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Student Promote</span>
                        <p class="mt-1 mb-3">In the promote student in next session, After selecting the pass or fail, super admin have to select the promote session and promote class.</p>
                    </li>
                    <p class="mt-4">This module is designed to promote students of a particular class to the next class in the next session. ‘Student Promotion’ submenu will be found under the menu ‘student’ in the admin panel. To promote students to the next class, admin needs to select the present class of the students and the class where he/she wants to promote the students. The present session which has been already set from the system settings will be selected automatically as the present session and the next session will be automatically calculated by the software.</p>
                </ol>
            </div>` 
            },
            {
                slug: "disabled-students", 
                title: "Disabled Students", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Disabled Students</h3>
                <img src="/Eskooly/disabled_student.png" alt="Disabled Students" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Search Disabled Students</span>
                        <p class="mt-1 mb-3">To search the disabled student list,class is required and if need to find the individual then the section, name and roll is needed.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Select Actions</span>
                        <p class="mt-1 mb-3">In the disabled students list, super admin can view, edit and delete the list item.</p>
                    </li>
                </ol>
            </div>` 
            },
            {
                slug: "student-report", 
                title: "Student Report", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Student Report</h3>
                <img src="/Eskooly/student_reports.png" alt="Student Report" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Search Student Report</span>
                        <p class="mt-1 mb-3">To search the student report, have to select the class,section, student type, gender.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Student Report List</span>
                        <p class="mt-1 mb-3">The search result is shown in student report list. Here student's all the major information are shown.</p>
                    </li>
                </ol>
            </div>` 
            },
            {
                slug: "guardian-reports", 
                title: "Guardian Reports", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Guardian Reports</h3>
                <img src="/Eskooly/guardian_reports.png" alt="Guardian Reports" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Search Guardian Reports</span>
                        <p class="mt-1 mb-3">To search the guardian report, have to select the class, section.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Student Guardian Reports List</span>
                        <p class="mt-1 mb-3">The search result is shown in guardian report list. Here student's guardian all the major information are shown.</p>
                    </li>
                </ol>
            </div>` 
            },
            {
                slug: "student-history", 
                title: "Student History", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Student History</h3>
                <img src="/Eskooly/students_history.png" alt="Student History" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Search Student History</span>
                        <p class="mt-1 mb-3">For searching the student history, super admin have to select the class and admission year.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Student Report List</span>
                        <p class="mt-1 mb-3">The search result is shown in student history list. Here student history are shown.</p>
                    </li>
                </ol>
            </div>` 
            },
            {
                slug: "student-login-report", 
                title: "Student Login Report", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Student Login Report</h3>
                <img src="/Eskooly/student_login_report.png" alt="Student Login Report" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Search Student Login Report</span>
                        <p class="mt-1 mb-3">To search the student login report, have to select the class, the current section.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Student Login Info Report List</span>
                        <p class="mt-1 mb-3">The search result is shown in student login report list. Here student can reset his password and his guardian as well.</p>
                    </li>
                </ol>
            </div>` 
            }
        ]
    },
    {
        category: "Reports",
        items: [
            {
                slug: "fees-statement", 
                title: "Fees Statement", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Fees Statement</h3>
                <img src="/Eskooly/FeesStatement1.png" alt="Fees Statement" class="w-full rounded-lg shadow-md border border-gray-50" />
                <img src="/Eskooly/FeesStatement2.png" alt="Fees Statement" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Search Fees Statement</span>
                        <p class="mt-1 mb-3">For searching the student fees statement report, have to select the class, section, student name.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Student Fees Statement List</span>
                        <p class="mt-1 mb-3">The search result is shown in student fees statement report list. Here, student's fees which are paid already and if has any discount that are also shown.</p>
                    </li>
                </ol>
            </div>` 
            },
            {
                slug: "balance-fees-report", 
                title: "Balance Fees Report", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Balance Fees Report</h3>
                <img src="/Eskooly/Balance_Fees_Report.png" alt="Balance Fees Report" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Search Balance Fees Report</span>
                        <p class="mt-1 mb-3">For searching the student balance fees report, have to select the class, section.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Student Fees Report List</span>
                        <p class="mt-1 mb-3">The search result is shown in student balance fees report list. Here student's amount, discount, fine, paid fees, balance statement are shown.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Grand Total</span>
                        <p class="mt-1 mb-3">Grand total is shown one section's amount, discount, fine, paid fees, balance total statement</p>
                    </li>
                </ol>
            </div>` 
            },
            {
                slug: "transaction-report", 
                title: "Transaction Report", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Transaction Report</h3>
                <img src="/Eskooly/TransactionReport1.png" alt="Transaction Report" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Search Transaction Report</span>
                        <p class="mt-1 mb-3">For searching the student balance fees report, have to select from from date to date to.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Fees Collection Details</span>
                        <p class="mt-1 mb-3">Fees collection detail list show particular date duration's fees collection information.</p>
                        <img src="/Eskooly/TransactionReport2.png" alt="Transaction Report" class="w-full rounded-lg shadow-md border border-gray-50" />
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Income Result</span>
                        <p class="mt-1 mb-3">Income result list show particular date duration's income detail information. Grand total show the total amount of income.</p>
                        <img src="/Eskooly/TransactionReport3.png" alt="Transaction Report" class="w-full rounded-lg shadow-md border border-gray-50" />
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Expense Result</span>
                        <p class="mt-1 mb-3">Expense result list show particular date duration's expense detail information.Grand total show the total amount of expense</p>
                    </li>
                </ol>
            </div>` 
            },
            {
                slug: "class-report", 
                title: "Class Report", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Class Report</h3>
                <img src="/Eskooly/ClassReport1.png" alt="Class Report" class="w-full rounded-lg shadow-md border border-gray-50" />
                <img src="/Eskooly/ClassReport2.png" alt="Class Report" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Search Class Report</span>
                        <p class="mt-1 mb-3">For searching the class report, have to select class and it's section name.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Class Report for particular Class and Section</span>
                        <p class="mt-1 mb-3">This report show the particular class's summary. Here includes class information, subjects, type of fees collection.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Statistic of Fees Collection</span>
                        <p class="mt-1 mb-3">This graphical statistic represents the particular class's fees collection statement.</p>
                    </li>
                </ol>
            </div>` 
            },
            {
                slug: "class-routine-report", 
                title: "Class Routine Report", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Class Routine Report</h3>
                <img src="/Eskooly/class_routine_report.png" alt="Class Routine Report" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Search Class Routine</span>
                        <p class="mt-1 mb-3">For searching the class routine, have to select class and it's section name.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Class Routine List</span>
                        <p class="mt-1 mb-3">The search result is shown in class routine report list. Here full week's per period assigned classes are shown.</p>
                    </li>
                </ol>
            </div>` 
            },
            {
                slug: "exam-routine", 
                title: "Exam Routine", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Exam Routine</h3>
                <img src="/Eskooly/exam_routine_report.png" alt="Exam Routine" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Search Exam Routine</span>
                        <p class="mt-1 mb-3">For searching the exam routine, have to select examination name.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Exam Routine List</span>
                        <p class="mt-1 mb-3">The search result is shown in exam routine report list. Here particular exam's full routine are shown.</p>
                    </li>
                </ol>
            </div>` 
            },
            {
                slug: "teacher-class-routine-report", 
                title: "Teacher Class Routine Report", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Teacher Class Routine Report</h3>
                <img src="/Eskooly/TeacherClassRoutineReport.png" alt="Teacher Class Routine Report" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Search Teacher Class Routine Report</span>
                        <p class="mt-1 mb-3">By selecting the teacher name, super admin can see the particular teacher's class routine.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Class Routine List</span>
                        <p class="mt-1 mb-3">In this class routine, individual teacher's full week assign class are listed.</p>
                    </li>
                </ol>
            </div>` 
            },
            {
                slug: "merit-list-report", 
                title: "Merit List Report", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Merit List Report</h3>
                <img src="/Eskooly/merit_list_report.png" alt="Merit List Report" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Search Merit List Report</span>
                        <p class="mt-1 mb-3">To see the particular section of a class, have to select the exam name, class name, section.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Merit List Report</span>
                        <p class="mt-1 mb-3">Search result are shown the a class all student's merit list. Here, in ascending order of student position, lists are shown. Individual subject's mark, grade also inclued in this list.</p>
                    </li>
                </ol>
            </div>` 
            },
            {
                slug: "online-exam-report", 
                title: "Online Exam Report", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Online Exam Report</h3>
                <img src="/Eskooly/online_result_view.png" alt="Online Exam Report" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Search Online Exam Report</span>
                        <p class="mt-1 mb-3">You can search online exam report. Search fields are exam term, class, and section</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Result View</span>
                        <p class="mt-1 mb-3">After searching the result view list are shown</p>
                    </li>
                </ol>
            </div>` 
            },
            {
                slug: "tabulation-sheet-report", 
                title: "Tabulation Sheet Report", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Tabulation Sheet Report</h3>
                <img src="/Eskooly/terminal_report.png" alt="Tabulation Sheet Report" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Search Tabulation Sheet Report</span>
                        <p class="mt-1 mb-3">You can search tabulation sheet report. Searching fields are Exam type Id, Class, Section and student.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Student Terminal Report</span>
                        <p class="mt-1 mb-3">After searching tabulation sheet, the tabulation sheet are shown in below.</p>
                    </li>
                </ol>
            </div>` 
            },
            {
                slug: "student-progress-report", 
                title: "Student Progress Report", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Progress Report</h3>
                <img src="/Eskooly/progress-report.png" alt="Progress Report" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Search Progress Report</span>
                        <p class="mt-1 mb-3">You can search student progress report</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Progress Report List</span>
                        <p class="mt-1 mb-3">After searching you can find student progress report list.</p>
                    </li>
                </ol>
            </div>` 
            },
            {
                slug: "student-fine-report", 
                title: "Student Fine Report", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Student Fine Report</h3>
                <img src="/Eskooly/student_fine_report.png" alt="Student Fine Report" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Search Student Fine Report</span>
                        <p class="mt-1 mb-3">You can search student fine report form between two date</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Student Fine Report List</span>
                        <p class="mt-1 mb-3">After searching you can find student fine report list.</p>
                    </li>
                </ol>
            </div>` 
            },
            {
                slug: "user-log", 
                title: "User Log", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia User Log</h3>
                <img src="/Eskooly/user_log.png" alt="User Log" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">User Log list</span>
                        <p class="mt-1 mb-3">This is onl for administrator, he can see the user loging history so that he can understand which user is active or not.</p>
                    </li>
                </ol>
            </div>` 
            }
        ]
    },
    {
        category: "Student Panel",
        items: [
            {
                slug: "student-profile", 
                title: "Student Profile", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Student Profile</h3>
                <img src="/Eskooly/student_panel.png" alt="Student Profile" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Student Profile</span>
                        <p class="mt-1 mb-3">Student can see his Profile,fees statement,examination,document and timeline.the profile includes personal information,parent,transport,dormitory, other information and so on.</p>
                    </li>
                </ol>
            </div>` 
            },
            {
                slug: "fees", 
                title: "Fees", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Fees</h3>
                <img src="/Eskooly/fees.png" alt="Fees" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add Fees</span>
                        <p class="mt-1 mb-3">Fees statement lists are shown and if fees are not paid yet then student is able to pay his fees through Paypal and Stripe.</p>
                    </li>
                </ol>
            </div>` 
            },
            {
                slug: "class-routine", 
                title: "Class Routine", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Class Routine</h3>
                <img src="/Eskooly/class_routine.png" alt="Class Routine" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Class Routine</span>
                        <p class="mt-1 mb-3">Class routine are shown here. Class routine module has the capability to set routines section wise for a particular class. Admin can add, edit or delete any class routine and there is a print button associated with every class routine for printing</p>
                    </li>
                </ol>
            </div>` 
            },
            {
                slug: "homework", 
                title: "Homework", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Homework</h3>
                <img src="/Eskooly/homework.png" alt="Homework" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Homework List</span>
                        <p class="mt-1 mb-3">Homework list with complete and incomplete status are shown.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Select Action</span>
                        <p class="mt-1 mb-3">Student can see the homework's full detail view in the action section.</p>
                    </li>
                </ol>
            </div>` 
            },
            {
                slug: "download-center", 
                title: "Download Center", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Download Center</h3>
                <img src="/Eskooly/collect_fees.png" alt="Download Center" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Search Collect Fees</span>
                        <p class="mt-1 mb-3">Administrator/accountant can search to show their collecting fees from the student</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Collect Fees</span>
                        <p class="mt-1 mb-3">To collect fees, click here.</p>
                        <img src="/Eskooly/collect_fees_action.png" alt="Download Center" class="w-full rounded-lg shadow-md border border-gray-50" />
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Select Actions</span>
                        <p class="mt-1 mb-3">You can add fees or print data.</p>
                        <img src="/Eskooly/add_fees.png" alt="Download Center" class="w-full rounded-lg shadow-md border border-gray-50" />
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add Fees</span>
                        <p class="mt-1 mb-3">You can add fees fro here. There are four fields are required those are amount,discount group, discount & fine. There are three type of payment method has given. After giving all information of fees, then submit.</p>
                    </li>
                </ol>
            </div>` 
            },
            {
                slug: "attendance", 
                title: "Attendance", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Attendance</h3>
                <img src="/Eskooly/search_fees_payments.png" alt="Download Center" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Search Fees Payment</span>
                        <p class="mt-1 mb-3">You can search fees by payment ID.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Select Actions</span>
                        <p class="mt-1 mb-3">You can view more details</p>
                        <img src="/Eskooly/view (4).png" alt="Download Center" class="w-full rounded-lg shadow-md border border-gray-50" />
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Print</span>
                        <p class="mt-1 mb-3">You will able to print payment details.</p>
                        <img src="/Eskooly/attendance.png" alt="Download Center" class="w-full rounded-lg shadow-md border border-gray-50" />
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Search Attendance</span>
                        <p class="mt-1 mb-3">Student can search the student attendance.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Attendance Result</span>
                        <p class="mt-1 mb-3">In this section attendance results are shown. Attendance result show the certain month attendance which is remarked by present(P),late(L),absent(A),Half Day(H) and Holiday(F)</p>
                    </li>
                </ol>
            </div>` 
            },
            {
                slug: "examinations", 
                title: "Examinations", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Examinations</h3>
                <img src="/Eskooly/fees_master.png" alt="Download Center" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add Fees Master</span>
                        <p class="mt-1 mb-3">You can add fees master from here.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Select Actions</span>
                        <p class="mt-1 mb-3">You can assign/view fees. You can also edit data from here.</p>
                        <img src="/Eskooly/assign.png" alt="Download Center" class="w-full rounded-lg shadow-md border border-gray-50" />
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Search Fees Assign</span>
                        <p class="mt-1 mb-3">You can search fees assign.</p>
                        <img src="/Eskooly/examination1.png" alt="Download Center" class="w-full rounded-lg shadow-md border border-gray-50" />
                        <img src="/Eskooly/examinations2.png" alt="Download Center" class="w-full rounded-lg shadow-md border border-gray-50" />
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Exam Result</span>
                        <p class="mt-1 mb-3">Student can see his result.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Search Exam Routine</span>
                        <p class="mt-1 mb-3">For exam schedule, student can search here.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Exam Routine List</span>
                        <p class="mt-1 mb-3">Exam routine are shown here.</p>
                    </li>
                </ol>
            </div>` 
            },
            {
                slug: "online-exam", 
                title: "Online Exam", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Online Exam</h3>
                <img src="/Eskooly/online_exam1.png" alt="Download Center" class="w-full rounded-lg shadow-md border border-gray-50" />
                <img src="/Eskooly/online_exam2.png" alt="Download Center" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Online Active Exams</span>
                        <p class="mt-1 mb-3">Which exams are active that are shown here.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Take Exam</span>
                        <p class="mt-1 mb-3">Student can take examination if they want.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Take Online Exam</span>
                        <p class="mt-1 mb-3">After completion of online exam, student can submit his exam answer.</p>
                        <img src="/Eskooly/backup.png" alt="Download Center" class="w-full rounded-lg shadow-md border border-gray-50" />
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Upload Backup</span>
                        <p class="mt-1 mb-3">Our system will help you to backup & restore your system. If you want to upload your database, then you can do it. But uploaded file must be sql file. Without sql file you can't upload it.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Images Backup</span>
                        <p class="mt-1 mb-3">You can make whole image backup and download image as zip format.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Full System Backup</span>
                        <p class="mt-1 mb-3">You can make whole full system backup and download as zip format. After downloading, you should delete system backup file from server.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Database Backup</span>
                        <p class="mt-1 mb-3">You can take database backup and download.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Download</span>
                        <p class="mt-1 mb-3">You can download from here</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Restore</span>
                        <p class="mt-1 mb-3">You can restore your backup</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Delete</span>
                        <p class="mt-1 mb-3">You can delete your backup</p>
                    </li>
                </ol>
            </div>` 
            },
            {
                slug: "notice-board", 
                title: "Notice Board", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Notice Board</h3>
                <img src="/Eskooly/notice_board.png" alt="Download Center" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">All Notice List</span>
                        <p class="mt-1 mb-3">All the notice are listed here for student's acknowledgement.</p>
                        <img src="/Eskooly/update-system.png" alt="Download Center" class="w-full rounded-lg shadow-md border border-gray-50" />
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">System Status</span>
                        <p class="mt-1 mb-3">It will show that current system version and upgrade version. Upgrade version always offers to you with new features, bug fixing. It will take you advance technology.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Update System</span>
                        <p class="mt-1 mb-3">If update version is available, then you can upgrade from here. At first you have to read alert carefully, If you have to do anything, then do it before taking upgrade.</p>
                    </li>
                </ol>
            </div>` 
            },
            {
                slug: "subject", 
                title: "Subject", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Subject</h3>
                <img src="/Eskooly/subject.png" alt="Download Center" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Subject list</span>
                        <p class="mt-1 mb-3">Assigned Subjects are listed here.Student can see those.</p>
                    </li>
                </ol>
            </div>` 
            },
            {
                slug: "teachers", 
                title: "Teachers", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Teachers</h3>
                <img src="/Eskooly/teacher.png" alt="Download Center" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Teacher list</span>
                        <p class="mt-1 mb-3">Course teacher listed here.</p>
                    </li>
                </ol>
            </div>` 
            },
            {
                slug: "library", 
                title: "Library", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Library</h3>
                <img src="/Eskooly/library1.png" alt="Download Center" class="w-full rounded-lg shadow-md border border-gray-50" />
                <img src="/Eskooly/library2.png" alt="Download Center" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Book List</span>
                        <p class="mt-1 mb-3">All Books which are available in the library are shown here.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">All Issued Book List</span>
                        <p class="mt-1 mb-3">Which books are issued for this student are shown here.</p>
                    </li>
                </ol>
            </div>` 
            },
            {
                slug: "transport", 
                title: "Transport", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Transport</h3>
                <img src="/Eskooly/Transport.png" alt="Download Center" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Transport Route List</span>
                        <p class="mt-1 mb-3">Student can see the transport routes and vehicles.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">View Info</span>
                        <p class="mt-1 mb-3">Full details of transport route are shown here.</p>
                    </li>
                </ol>
            </div>` 
            },
            {
                slug: "dormitory", 
                title: "Dormitory", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Dormitory</h3>
                <img src="/Eskooly/dormitory.png" alt="Download Center" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Dormitory Room List</span>
                        <p class="mt-1 mb-3">Dormitory and it's room information with which room is assigned for the student is listed here.</p>
                    </li>
                </ol>
            </div>` 
            }
        ]
    },
    {
        category: "Parents Panel",
        items: [
            {
                slug: "student-profile", 
                title: "Student Profile", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Student Profile</h3>
                <img src="/Eskooly/my_children1.png" alt="Download Center" class="w-full rounded-lg shadow-md border border-gray-50" />
                <img src="/Eskooly/my_children2.png" alt="Download Center" class="w-full rounded-lg shadow-md border border-gray-50" />
                <img src="/Eskooly/my_children3.png" alt="Download Center" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Student Profile</span>
                        <p class="mt-1 mb-3">Parent Can See the Selected Student's Profile.</p>
                        <img src="/Eskooly/add-homework.png" alt="Download Center" class="w-full rounded-lg shadow-md border border-gray-50" />
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Create Homework</span>
                        <p class="mt-1 mb-3">Administrator/Teachers can add homework for their students. After adding homework, students will get notification of their system panel.</p>
                    </li>
                    <p class="mt-4">Compulsory fields for homework Class * Section * Subject * HomeWork Date * Submission Date * Marks * Description *</p>
                    <img src="/Eskooly/homework-list.png" alt="Download Center" class="w-full rounded-lg shadow-md border border-gray-50" />
                    <li>
                        <span class="font-bold text-[#581C87]/70">Update Homework</span>
                        <p class="mt-1 mb-3">Evaluation homework Edit homework Delete homework 3. Search Homework Administrator/Teachers can search homework for their students homework</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add Homework</span>
                        <p class="mt-1 mb-3">Administrator/Teachers can add homework for their students</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Update Homework</span>
                        <img src="/Eskooly/evaluation.png" alt="Download Center" class="w-full rounded-lg shadow-md border border-gray-50" />
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Homework Evaluation</span>
                        <p class="mt-1 mb-3">Here Teachers can create Homework for their Class-Section. After creating homework teachers can evaluate homework for class-section students that who has completed homework or not completed. First we will Add Homework then we will evaluate homework. Homework- Go to Homework > Add Homework Here you can see all previously created homework and search them different criteria.</p>
                    </li>
                </ol>
            </div>` 
            },
            {
                slug: "student-fees-statement", 
                title: "Student Fees Statement", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Student Fees Statement</h3>
                <img src="/Eskooly/fees (1).png" alt="Download Center" class="w-full rounded-lg shadow-md border border-gray-50" />
                <img src="/Eskooly/fees1.png" alt="Download Center" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Student Fees Statement</span>
                        <p class="mt-1 mb-3">Parent Can See the particular student's fees statement,fees status which is paid or not.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Select Actions</span>
                        <p class="mt-1 mb-3">The action includes two online payment options such as Paypal and Stripe.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Collect Fees Online Via Card</span>
                        <p class="mt-1 mb-3">Parent Can pay the fees through online via cards.</p>
                    </li>
                </ol>
            </div>` 
            },
            {
                slug: "student-class-routine", 
                title: "Student Class Routine", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Student Class Routine</h3>
                <img src="/Eskooly/student_admission1.png" alt="Download Center" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Import Student</span>
                        <p class="mt-1 mb-3">Administrator will able to import student. There is an Excel format for import student.</p>
                    </li>
                    <p class="mt-4">Student Admission There are several inputs fields for student admission. We will discuss in below.</p>
                    <p class="mt-4">Admission Number: This input field will increase automatically. Compulsory Fields Class: If the class list is empty, then you have to add class Section: If the section list is empty, then you have to add section First Name Gender: If the gender list is empty, then you have to add base setup Date of Birth Session: If the gender list is empty, then you have to add session 2. Add Parent If a student have any siblings who are already admitted, then add parent of previous student.</p>
                   <li>
                    <span class="font-bold text-[#581C87]/70">Add Parent</span>
                    <p class="mt-1 mb-3">If a student have any siblings who are already admitted, then add parent of previous student.</p>
                    <img src="/Eskooly/student_admission2.png" alt="Download Center" class="w-full rounded-lg shadow-md border border-gray-50" />
                   </li>
        
                    <li>
                        <span class="font-bold text-[#581C87]/70">Guardian</span>
                        <p class="mt-1 mb-3">If gurdian without one of parents, you have to add guardian and input their relations between them</p>
                    <p class="mt-4">Compulsory Fields Guardian Email: It is required because their login in this system to check their child's progress or lacking Guardian Phone: Phone number is must required.</p>
                        <img src="/Eskooly/student_admission3.png" alt="Download Center" class="w-full rounded-lg shadow-md border border-gray-50" />
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Save Student Data</span>
                        <p class="mt-1 mb-3">You can select Dormitory & Room Number.</p>
                    <p class="mt-4">You can select Transport Route, vehicle number, and driver name</p>
                        <img src="/Eskooly/student_import.png" alt="Download Center" class="w-full rounded-lg shadow-md border border-gray-50" />
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Download Sample File</span>
                        <p class="mt-1 mb-3">Before import excel file, you should download the sample file to know it's format.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Student Import</span>
                        <p class="mt-1 mb-3">Before import excel file, you have to generate excel file according to our sample format, and follow our instruction which are given in above.</p>
                        <img src="/Eskooly/class_routine (1).png" alt="Download Center" class="w-full rounded-lg shadow-md border border-gray-50" />
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Student Class Routine</span>
                        <p class="mt-1 mb-3">Parent can see the class routine of the particular student.</p>
                        <img src="/Eskooly/class-routine.png" alt="Download Center" class="w-full rounded-lg shadow-md border border-gray-50" />
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Class Routine</span>
                        <p class="mt-1 mb-3">Administrator/Teachers can set Class Routine</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Class Period</span>
                        <p class="mt-1 mb-3">If class period is empty, then at first you have to class period. You can also modify class period.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Weekend</span>
                        <p class="mt-1 mb-3">If weekend is empty, then at first you have to weekend. You can also modify weekend.</p>
                        <img src="/Eskooly/create-class-routine.png" alt="Download Center" class="w-full rounded-lg shadow-md border border-gray-50" />
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Set Class Routine</span>
                        <p class="mt-1 mb-3">To set class routine, you have to select subject, teacher, and room number. Please see how to add subject , teacher , and room number</p>
                    </li>
                </ol>
            </div>` 
            },
            {
                slug: "homework-list", 
                title: "Homework list", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Homework list</h3>
                <img src="/Eskooly/student_list.png" alt="Download Center" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Add Student</span>
                        <p class="mt-1 mb-3">You can go add a student from here.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Search Student</span>
                        <p class="mt-1 mb-3">You can search student list</p>
                        <img src="/Eskooly/student_list3.png" alt="Download Center" class="w-full rounded-lg shadow-md border border-gray-50" />
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Select Student</span>
                        <p class="mt-1 mb-3">You can view, edit, delete of the student.</p>
                        <img src="/Eskooly/student_list4.png" alt="Download Center" class="w-full rounded-lg shadow-md border border-gray-50" />
                        <img src="/Eskooly/student_list5.png" alt="Download Center" class="w-full rounded-lg shadow-md border border-gray-50" />
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Student Details</span>
                    </li>
                    <li>
                    <span class="font-bold text-[#581C87]/70">Sibling Information</span>
                    </li>
                    <li>
                    <span class="font-bold text-[#581C87]/70">Student Profile</span>
                    </li>
                    <li>
                    <span class="font-bold text-[#581C87]/70">Edit Student</span>
                    </li>
                    <li>
                    <span class="font-bold text-[#581C87]/70">Student Fees</span>
                    </li>
                    <li>
                    <span class="font-bold text-[#581C87]/70">Document</span>
                    </li>
                    <li>
                    <span class="font-bold text-[#581C87]/70">Timeline</span>
                    <img src="/Eskooly/homework.png" alt="Download Center" class="w-full rounded-lg shadow-md border border-gray-50" />
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Student Homework list</span>
                        <p class="mt-1 mb-3">Parent can see the student's homework list.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Select Action</span>
                        <p class="mt-1 mb-3">Particular homework view in the action option.</p>
                    <img src="/Eskooly/assign-subject.png" alt="Download Center" class="w-full rounded-lg shadow-md border border-gray-50" />
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Assign Subject</span>
                        <p class="mt-1 mb-3">To set assign subject, you have to select subject, teacher, and room number. Please see how to add subject , teacher.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Search Assign Subject</span>
                        <p class="mt-1 mb-3">Administrator will able to search assign subject.</p>
                    <img src="/Eskooly/add-assign-subject.png" alt="Download Center" class="w-full rounded-lg shadow-md border border-gray-50" />
                    </li>
                </ol>
            </div>` 
            },
            {
                slug: "student-attendance", 
                title: "Student Attendance", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Student Attendance</h3>
                    <img src="/Eskooly/attendance (1).png" alt="Download Center" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Search Attendance</span>
                        <p class="mt-1 mb-3">Parent can search the student attendance.</p>
                    </li>
                    <li>
                        <span class="font-bold text-[#581C87]/70">Attendance Result</span>
                        <p class="mt-1 mb-3">In this section attendance results are shown.Attendance result show the certain month attendance which is remarked by present(P),late(L),absent(A),Half Day(H) and Holiday(F)</p>
                    </li>
                </ol>
            </div>` 
            },
            {
                slug: "notice-board", 
                title: "Notice Board", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Notice Board</h3>
                    <img src="/Eskooly/notice_board.png" alt="Download Center" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">All Notices</span>
                        <p class="mt-1 mb-3">Parent can see the notice list which is selected for parents.</p>
                    </li>
                </ol>
            </div>` 
            },
            {
                slug: "subjects", 
                title: "Subjects", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Subjects</h3>
                    <img src="/Eskooly/subjects.png" alt="Download Center" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Student assigned Subjects</span>
                        <p class="mt-1 mb-3">Parent can see which subjects are assigned.</p>
                    </li>
                </ol>
            </div>` 
            },
            {
                slug: "teacher-list", 
                title: "Teacher List", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Teacher List</h3>
                    <img src="/Eskooly/teacher (1).png" alt="Download Center" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Student assigned Teacher List</span>
                        <p class="mt-1 mb-3">Parent can see the teachers list whom are assigned.</p>
                    </li>
                </ol>
            </div>` 
            },
            {
                slug: "transport-list", 
                title: "Transport List", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Transport List</h3>
                    <img src="/Eskooly/transport (1).png" alt="Download Center" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Student Transport List</span>
                        <p class="mt-1 mb-3">Parent can see the transport route and assigned vehicle.</p>
                    </li>
                </ol>
            </div>` 
            },
            {
                slug: "dormitory", 
                title: "Dormitory", 
                content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkoolia Dormitory</h3>
                    <img src="/Eskooly/dormitory (1).png" alt="Download Center" class="w-full rounded-lg shadow-md border border-gray-50" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-[#581C87]/70 marker:font-bold">
                    <li>
                        <span class="font-bold text-[#581C87]/70">Student Assigned Dormitory</span>
                        <p class="mt-1 mb-3">Dormitory list and assigned dormitory are seen in this module.</p>
                    </li>
                </ol>
            </div>` 
            }
        ]
    },
];

// Icons mapping 
export const categoryIcons: Record<string, any> = {
    "Welcome": Home,
    "Initiate": Cloud,
    "Dashboard": LayoutDashboard,
    "Admin Section": Users,
    "System Setting": Settings,
    "Dormitory": Home,
    "Transport": Bus,
    "Inventory": Package,
    "Library": Library,
    "Communicate": MessageSquare,
    "Homework": Book,
    "Academics": GraduationCap,
    "Examination": ClipboardList,
    "Leave Application": FileText,
    "Human Resource": UserCircle,
    "Profit": Wallet,
    "Accounts": CreditCard,
    "Download Center": Cloud,
    "Student Information": User,
    "Reports": BarChart,
    "Student Panel": Laptop,
    "System Maintenance": Settings,
    "Parents Panel": Monitor
};

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
            <h1 class="text-2xl font-bold text-slate-700 mb-2">Welcome</h1>
            <h2 class="text-xl text-slate-600 mb-4">To</h2>
            <h1 class="text-2xl font-bold text-[#6f42c1] mb-2">eSkooly ultimate Education ERP</h1>
            <p class="text-slate-500 mb-4">Ultimate solution for your school to run modern way</p>
            <p class="text-slate-600 font-medium">By</p>
            <h3 class="text-xl font-bold text-[#6f42c1] mb-12">eSkooly</h3>

            <div class="text-left max-w-2xl mx-auto space-y-1 mb-10 text-xs text-blue-500 text-center">
               <p>Email: pro@eskooly.com</p>
               <p>Web: pro.eskooly.com</p>
            </div>

            <div class="text-center space-y-4 text-slate-600 mb-10">
              <p>We would like to thank you for purchasing eSkooly School! We are very pleased you have chosen eSkooly School for your institution, you will not be disappointed! Before you get started, please be sure to always check out these documentation files. We outline all kinds of good information, and provide you with all the details you need to use eSkooly School. eSkooly School can be used with any school, college, university, training/coaching institute.</p>
              <p>If you are unable to find your answer here in our documentation, watch our Video Tutorials, you can also visit our Help & Support. Chances are your question or issue have been brought up already and the answer is waiting to be found. If you are unable to find it anywhere, then please go our Support section and open a new Support Ticket with all the details we need. Please be sure to include your site URL as well. Thank you, we hope you enjoy using eSkooly School!</p>
            </div>

            <div class="flex justify-center gap-4">
              <button class="px-6 py-2 bg-[#8B5CF6] text-white font-bold rounded-full text-[10px] uppercase tracking-wide shadow-md hover:bg-[#7c3aed] transition-colors">Video Tutorials</button>
              <button class="px-6 py-2 bg-white text-[#8B5CF6] border border-[#8B5CF6] font-bold rounded-full text-[10px] uppercase tracking-wide shadow-sm hover:bg-slate-50 transition-colors">Help & Supports</button>
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
                <h3 class="text-xl font-bold text-[#6f42c1] mb-4 text-center">eSkooly System Requirements</h3>
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
                <p>After installation eSkooly School to work properly, you must make few directories/files writable.</p>
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
                <h3 class="text-xl font-bold text-[#6f42c1] mb-4 text-center">eSkooly School Installation</h3>
                
                <ol class="list-decimal pl-5 space-y-6 marker:text-slate-700 marker:font-bold">
                    <li>
                        <div class="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                             <h4 class="font-bold text-xl text-slate-800 mb-6">Database and database user creation on Server</h4>
                             <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                                <li>
                                    <p class="mt-1 mb-3">Log into your cPanel.</p>
                                    <img src="/Eskooly/cPanelLogin.png" alt="Log into cPanel" class="h-48 rounded-lg shadow-md border border-slate-200" />
                                </li>
                                <li>
                                    <p class="mt-1 mb-3">Click the MySQL Database Wizard under the Databases heading.</p>
                                    <img src="/Eskooly/install-dbwizard.png" alt="MySQL Database Wizard" class="h-48 rounded-lg shadow-md border border-slate-200" />
                                </li>
                                <li>
                                    <p class="mt-1 mb-3">Next to New Database enter a name for your database and click Next Step.</p>
                                    <img src="/Eskooly/install-dbwizard2.png" alt="New Database" class="h-48 rounded-lg shadow-md border border-slate-200" />
                                </li>
                                <li>
                                    <p class="mt-1 mb-3">Next to Username enter a username. Enter a password next to Password, enter it again for Password (Again) and then click Create User.</p>
                                    <img src="/Eskooly/install-dbwizard3.png" alt="Create User" class="h-56 rounded-lg shadow-md border border-slate-200" />
                                </li>
                                <li>
                                    <p class="mt-1 mb-3">On the next page, you'll assign privileges for the user to the database. Check the box next to All Privileges and then click Next Step.</p>
                                    <img src="/Eskooly/install-dbwizard4.png" alt="Assign Privileges" class="h-64 rounded-lg shadow-md border border-slate-200" />
                                </li>
                             </ol>
                        </div>
                    </li>

                    <li>
                        <div class="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                             <h4 class="font-bold text-xl text-slate-800 mb-6">Upload the package to your host</h4>
                             <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                                <li>
                                    <p class="mt-1 mb-3">Download the package from 2checkout or from pro.eskooly.com Website. Unzip the package and you'll find the following contents: Documentation, upload.zip</p>
                                    <img src="/Eskooly/install-files.png" alt="Download Package" class="h-48 rounded-lg shadow-md border border-slate-200" />
                                </li>
                                <li>
                                    <p class="mt-1 mb-3">Upload file "upload.zip" to your host inside the desired location using cPanel File Manager</p>
                                    <img src="/Eskooly/install-filemanager.png" alt="Upload File" class="h-28 rounded-lg shadow-md border border-slate-200" />
                                </li>
                                <li>
                                    <p class="mt-1 mb-3">After upload is completed, Right click on the package and select Extract. This will extract the zipped file contents</p>
                                    <img src="/Eskooly/install-extract.png" alt="Extract Package" class="h-48 rounded-lg shadow-md border border-slate-200" />
                                </li>
                             </ol>
                        </div>
                    </li>

                    <li>
                        <div class="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                             <h4 class="font-bold text-xl text-slate-800 mb-6">Configure eSkooly with Database credentials</h4>
                             <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                                <li>
                                     <p class="mt-1 mb-3">Use the file manager to edit the file in the path .env</p>
                                     <p class="mt-1 mb-3">Add Database configuration in the file as described.</p>
                                     <img src="/Eskooly/env.png" alt="Edit .env" class="h-48 rounded-lg shadow-md border border-slate-200" />
                                </li>
                             </ol>
                        </div>
                    </li>

                    <li>
                        <div class="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                             <h4 class="font-bold text-xl text-slate-800 mb-6">Adjust the folders Permissions</h4>
                             <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
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
                        <div class="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                             <h4 class="font-bold text-xl text-slate-800 mb-6">Start the installation</h4>
                             <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                                <li>
                                    <p class="mt-1 mb-3">Use your browser to eSkooly install Script. Type in browser your application location followed by /install and hit Start Installation</p>
                                    <img src="/Eskooly/step1.png" alt="Start Installation" class="h-48 rounded-lg shadow-md border border-slate-200" />
                                </li>
                                <li>
                                    <p class="mt-1 mb-3">Checking Codecanyon Credentials. If all thing is ok Press Next Step</p>
                                    <img src="/Eskooly/step2.png" alt="Check Credentials" class="h-56 rounded-lg shadow-md border border-slate-200" />
                                </li>
                                <li>
                                    <p class="mt-1 mb-3">Checking Database configuration and Files & Folders permissions. If all thing is ok Press Next Step</p>
                                    <img src="/Eskooly/step3.png" alt="Check Database" class="h-56 rounded-lg shadow-md border border-slate-200" />
                                </li>
                                <li>
                                    <p class="mt-1 mb-3">Type in Administrator Details, Site Settings, Default Academic Year & License Code. Then Press Next Step</p>
                                    <img src="/Eskooly/step4.png" alt="Admin Details" class="h-56 rounded-lg shadow-md border border-slate-200" />
                                </li>
                                <li>
                                    <p class="mt-1 mb-3">Installation complete</p>
                                    <img src="/Eskooly/login.png" alt="Installation Complete" class="h-56 rounded-lg shadow-md border border-slate-200" />
                                </li>
                             </ol>
                        </div>
                    </li>
                </ol>
            </div>` },
            {
                slug: "get-support", title: "Get Support", content: `
            <div class="space-y-4">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-4 text-center">Get Support from eSkooly</h3>
                <p>To get Technical/Sales support. You must create eSkooly Account first.</p>
                <div class="p-4 bg-slate-50 rounded-lg inline-block text-center w-full">
                    <h4 class="font-bold mb-2 text-center text-slate-700">Contact Info</h4>
                    <p class="text-center">Email: <a href="mailto:pro@eskooly.com" class="text-blue-600 hover:underline">pro@eskooly.com</a></p>
                    <p class="text-center">Web: <a href="https://pro.eskooly.com" target="_blank" class="text-blue-600 hover:underline">pro.eskooly.com</a></p>
                    <p class="text-center">Support: <a href="http://ticket.eskooly.com" target="_blank" class="text-blue-600 hover:underline">http://ticket.eskooly.com</a></p>
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
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Dashboard</h3>
                <img src="/Eskooly/dashboard1.png" alt="Dashboard" class="w-full rounded-lg shadow-md border border-slate-200" />
                <ol class="list-none space-y-6">
                    <li>
                             <h4 class="font-bold text-xl text-slate-800 mb-4">1 & 3. Dashboard</h4>
                             <p class="mt-1 mb-6 text-slate-600">At the top menu of left sidebar is Dashboard. There are several view port in dashboard. we can see the number of students, teachers and staff etc. at a glance. Summary of the Income and Expenses is very important for ERP system. After login a user can see the update for that day.</p>                    </li>
                    <li>
                             <h4 class="font-bold text-xl text-slate-800 mb-4">2. Website</h4>
                             <p class="mt-1 mb-6 text-slate-600">From dashboard a user can easily return to own website home page.</p>
                    </li>
                    <li>
                             <h4 class="font-bold text-xl text-slate-800 mb-4">4. Reports</h4>
                             <p class="mt-1 mb-6 text-slate-600">Reports section is very important in this School Management ERP. You can go to report section from all over the system.</p>
                    </li>
                    <li>
                             <h4 class="font-bold text-xl text-slate-800 mb-4">5. Language</h4>
                             <p class="mt-1 mb-6 text-slate-600">eSkooly delivered to you equipped with different languages : English, Arabic (RTL), French, Dutch, German, Hindi, Italian, Turkish, Russian, Spanish & Portuguese etc. You can also add language with your own customization.</p>
                    </li>
                    <li>
                             <h4 class="font-bold text-xl text-slate-800 mb-4">6. Notification</h4>
                             <p class="mt-1 mb-6 text-slate-600">If Administrators or Teachers set any task for student, then it will automatically send notifications to Teachers, Students (All students or specify class's students) and parents also you can track sent messages.</p>
                    </li>
                    <li>
                             <h4 class="font-bold text-xl text-slate-800 mb-4">7. Profile</h4>
                             <p class="mt-1 mb-6 text-slate-600">The user can see their profile, change their existing password. Logout button at the bottom of this profile section.</p>
                    </li>
                    <li>
                             <h4 class="font-bold text-xl text-slate-800 mb-4">8. Number of students</h4>
                             <p class="mt-1 mb-6 text-slate-600">The user can see their profile, change their existing password. Logout button at the bottom of this profile section.</p>
                             <img src="/Eskooly/dashboard2.png" alt="Number of students" class="w-full rounded-lg shadow-md border border-slate-200" />
                             <img src="/Eskooly/dashboard3.png" alt="Number of students" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>                    
                    <li>
                             <h4 class="font-bold text-xl text-slate-800 mb-4">1. Dashboard</h4>
                             <p class="mt-1 mb-6 text-slate-600">At the top menu of left sidebar is Dashboard. There are several view port in dashboard. we can see the number of students, teachers and staff etc. at a glance. Summary of the Income and Expenses is very important for ERP system. After login a user can see the update for that day.</p>
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
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Admission Query</h3>
                <img src="/Eskooly/admission_query.png" alt="Admission Query" class="w-full rounded-lg shadow-md border border-slate-200" />
                <img src="/Eskooly/admission_query0.1.png" alt="Admission Query" class="w-full rounded-lg shadow-md border border-slate-200" />
                <img src="/Eskooly/admission_query1.png" alt="Admission Query" class="w-full rounded-lg shadow-md border border-slate-200" />
                <ol class="list-decimal pl-5 space-y-4 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Add Admission Query</span>
                        <p class="mt-1">Super Admin can add admission query. In the admission query all the details information of query should have to submit.</p>
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Search Admission Query</span>
                        <p class="mt-1">Admission query can be searched through certain date to date, information source and which are active or not.</p>
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Select Actions</span>
                        <p class="mt-1">In the actions option, if super admin wants, he can add next follow up query, edit and delete of a particular query.</p>
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Follow up Admission Query</span>
                        <p class="mt-1">If needed several follow up admission query can be added. That will be also listed in the follow up list and if he will want, he can delete it.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "visitor-book", title: "Visitor Book", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Visitor Book</h3>
                <img src="/Eskooly/visitor_book.png" alt="Visitor Book" class="w-full rounded-lg shadow-md border border-slate-200" />
                <ol class="list-decimal pl-5 space-y-4 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Add Visitor</span>
                        <p class="mt-1">For store how much visitors visit everyday and their information, super admin can add their detail information and that is shown in the visitor list.</p>
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Select Actions</span>
                        <p class="mt-1">In the visitor list, edit, delete and download visitor information is possible.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "complaint", title: "Complaint", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Complaint</h3>
                <img src="/Eskooly/complaint.png" alt="Complaint" class="w-full rounded-lg shadow-md border border-slate-200" />
                <ol class="list-decimal pl-5 space-y-4 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Add Complaint</span>
                        <p class="mt-1">If anyone complain that can be listed by adding the complaint. Complaint includes who complains, which type of complaint is it etc.</p>
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Select Actions</span>
                        <p class="mt-1">In the complaint list several actions are included which are view the complaint details, edit and delete.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "postal-receive", title: "Postal Receive", content: `
             <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Postal Receive</h3>
                <img src="/Eskooly/postal_receive.png" alt="Postal Receive" class="w-full rounded-lg shadow-md border border-slate-200" />
                <ol class="list-decimal pl-5 space-y-4 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Add Postal Receive</span>
                        <p class="mt-1">Super admin can add which postal are received. Here includes postal comes from and where it will go and several things.</p>
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Select Actions</span>
                        <p class="mt-1">Super admin can edit, delete and download the postal receive information.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "postal-dispatch", title: "Postal Dispatch", content: `
            <div class="space-y-6">
                 <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Postal Dispatch</h3>
                 <img src="/Eskooly/postal_dispatch.png" alt="Postal Dispatch" class="w-full rounded-lg shadow-md border border-slate-200" />
                 <ol class="list-decimal pl-5 space-y-4 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Add Postal Dispatch</span>
                        <p class="mt-1">The postal where will go, it can be added by super admin. Sender and receiver information are includes here.</p>
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Select Actions</span>
                        <p class="mt-1">Super admin can edit, delete and download the postal dispatch information.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "phone-call-log", title: "Phone Call Log", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Phone Call Log</h3>
                <img src="/Eskooly/phone_log.png" alt="Phone Call Log" class="w-full rounded-lg shadow-md border border-slate-200" />
                <ol class="list-decimal pl-5 space-y-4 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Add Phone Call</span>
                        <p class="mt-1">Super admin can able to add the phone call log. In this call log, All incoming, outgoing and it's call duration, date, next follow up date and all the details information are included.</p>
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Select Actions</span>
                        <p class="mt-1">Super admin can edit, delete the phone call log information.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "admin-setup", title: "Admin Setup", content: `
            <div class="space-y-6">
                 <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Admin Setup</h3>
                 <img src="/Eskooly/admin_setup.png" alt="Admin Setup" class="w-full rounded-lg shadow-md border border-slate-200" />
                 <ol class="list-decimal pl-5 space-y-4 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Add Admin Setup</span>
                        <p class="mt-1">In the admin setup, super admin can add different criteria which are sorted by their type. The types are source, purpose, complaint type, reference.</p>
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Select Actions</span>
                        <p class="mt-1">The data list can be deleted and edited by super admin.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "student-certificate", title: "Student Certificate", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Student Certificate</h3>
                <img src="/Eskooly/student_certificate.png" alt="Student Certificate" class="w-full rounded-lg shadow-md border border-slate-200" />
                <ol class="list-decimal pl-5 space-y-4 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Add Student Certificate</span>
                        <p class="mt-1">Super admin can add student certificate. Certificate name and background image is mandatory field in this section.</p>
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Select Actions</span>
                        <p class="mt-1">The Student Certificate list can be viewed, deleted and edited by super admin.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "generate-certificate", title: "Generate Certificate", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Generate Certificate</h3>
                <img src="/Eskooly/generate_certificate.png" alt="Generate Certificate" class="w-full rounded-lg shadow-md border border-slate-200" />
                <ol class="list-decimal pl-5 space-y-4 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Search Generate Certificate</span>
                        <p class="mt-1">To search student list, super admin should have to select class name, section name and which certificate he wants to generate.</p>
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Student List</span>
                    </li>
                </ol>
            </div>` },
            {
                slug: "student-id-card", title: "Student ID Card", content: `
             <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Student ID Card</h3>
                <img src="/Eskooly/student_id_card.png" alt="Student ID Card" class="w-full rounded-lg shadow-md border border-slate-200" />
                <ol class="list-decimal pl-5 space-y-4 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Add Student ID Card</span>
                         <p class="mt-1">To add student id card, id card title, logo of institution, designation of the person whom id card will generate, signature of the person is must needed to include.</p>
                    </li>
                    <li>
                         <span class="font-bold text-slate-700">Select Actions</span>
                         <p class="mt-1">The Student id card list can be viewed, deleted and edited by super admin.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "generate-id-card", title: "Generate ID Card", content: `
             <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Generate ID Card</h3>
                <img src="/Eskooly/generate_id_card.png" alt="Generate ID Card" class="w-full rounded-lg shadow-md border border-slate-200" />
                 <ol class="list-decimal pl-5 space-y-4 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Search Generate ID Card</span>
                        <p class="mt-1">To search student list, super admin should have to select class name, section name and which id card he wants to generate.</p>
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Student List</span>
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
                 <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly General Setting</h3>
                 <img src="/Eskooly/general-setting.png" alt="General Setting" class="w-full rounded-lg shadow-md border border-slate-200" />
                 <ol class="list-decimal pl-5 space-y-4 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Upload Logo</span> 
                        <p class="mt-1">Upload Institution logo</p>
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Change Logo</span> 
                        <p class="mt-1">After uploading Institution logo it will publish</p>
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">General Settings View</span> 
                        <p class="mt-1">Summary of General Settings View</p>
                        <img src="/Eskooly/general-setting2.png" alt="General Settings View" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Upload Form of General Settings</span> 
                        <p class="mt-1">You can update General Settings according to your institution</p>
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Change Currency</span> 
                        <p class="mt-1">You can change currency as your demand. All kind of currency is available in this system.</p>
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Change Language</span> 
                        <p class="mt-1">You can choose language as your demand. If your language is not available, the you have to add language into your system from 'system-setting>language-settings'. After adding language, it is required to setup and then you have to make it default.</p>
                    </li>
                 </ol>
             </div>` },
            {
                slug: "email-setting", title: "Email Setting", content: `
             <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Email Setting</h3>
                <img src="/Eskooly/email-setting.png" alt="Email Setting" class="w-full rounded-lg shadow-md border border-slate-200" />
                <p>You have to configuration email.</p>
            </div>` },
            {
                slug: "payment-method-settings", title: "Payment Method Settings", content: `
             <div class="space-y-6">
                  <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Payment Method Settings</h3>
                  <img src="/Eskooly/payment-paypal.png" alt="Payment Method Settings" class="w-full rounded-lg shadow-md border border-slate-200" />
                  <ol class="list-decimal pl-5 space-y-4 marker:text-slate-700 marker:font-bold">
                     <li>
                         <span class="font-bold text-slate-700">Select Payment Method</span>
                         <p class="mt-1">PayPal and Stripe payment method implemented. You can configuration one of them.</p>
                     </li>
                     <li>
                         <span class="font-bold text-slate-700">Update Payment Method</span>
                         <p class="mt-1">To enabling online payment in Parent Panel and Student Panel update your payment gateway account details for this, go to System Settings > Payment Methods select your appropriate payment gateway and add you payment gateway account details then click on save button and enable it from right side box.</p>
                     </li>
                     <li>
                         <span class="font-bold text-slate-700">Switch Payment Method</span>
                         <p class="mt-1">The administrator can switch within payment method</p>
                         <img src="/Eskooly/payment-stripe.png" alt="Payment Method Settings" class="w-full rounded-lg shadow-md border border-slate-200" />
                     </li>
                     <li>
                         <span class="font-bold text-slate-700">Stripe Payment Method</span>
                         <p class="mt-1">Stripe is the premier option for online credit card processing; it’s also the most popular premium payment gateway for Easy Digital Downloads – and it’s our preferred option!</p>

                         <h5 class="font-bold text-slate-700 mt-4 mb-2">Adding Stripe To Your Create Account</h5>
                         <p class="mt-1 mb-2">You will need to add Stripe as a payment gateway option to your Create account.</p>

                         <p class="mt-2 font-semibold text-slate-700">To do this, please follow the steps below:</p>
                         <ul class="list-disc pl-5 mt-2 space-y-1 text-slate-600">
                             <li>Log in to your Create account</li>
                             <li>Click "Shop" from the Top menu</li>
                             <li>Click "Shop Settings" from the left-hand menu</li>
                             <li>Click "Payment Gateways"</li>
                             <li>Click "Add New Gateway"</li>
                             <li>Choose "Stripe"</li>
                             <li>Click "Save Changes" to add the gateway</li>
                         </ul>

                         <h5 class="font-bold text-slate-700 mt-6 mb-2">Testing Stripe With Your Create Website</h5>

                         <p class="mt-2 font-semibold text-slate-700">To get these, please follow the steps below:</p>
                         <ul class="list-disc pl-5 mt-2 space-y-1 text-slate-600">
                             <li>Log in to your Stripe account</li>
                             <li>Click "Account" from the top right hand of the page</li>
                             <li>Click "Account Settings"</li>
                             <li>Click the "API Keys" from the top tabs</li>
                             <li>Here, you will need the "Test Secret Key" and "Test Publishable Key"</li>
                         </ul>
                         <img src="/Eskooly/stripe_configuration_screen.png" alt="Payment Method Settings" class="w-full rounded-lg shadow-md border border-slate-200" />
                     </li>
                  </ol>
             </div>` },
            {
                slug: "role-permission", title: "Role Permission", content: `
              <div class="space-y-6">
                  <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Role Permission</h3>
                  <img src="/Eskooly/role-permission.png" alt="Role Permission" class="w-full rounded-lg shadow-md border border-slate-200" />
                   <ol class="list-decimal pl-5 space-y-4 marker:text-slate-700 marker:font-bold">
                      <li>
                         <span class="font-bold text-slate-700">Role Permission</span>
                         <p class="mt-1">The administrator can add role and assign their permission</p>
                      </li>
                      <li>
                         <span class="font-bold text-slate-700">Select</span>
                         <p class="mt-1">The administrator can edit or delete role and assign their permission</p>
                         <img src="/Eskooly/assign-permission.png" alt="Role Permission" class="w-full rounded-lg shadow-md border border-slate-200" />
                      </li>
                      <li>
                         <span class="font-bold text-slate-700">Role Permission Assign</span>
                         <div class="mt-1 text-slate-600 space-y-2">
                             <p>The administrator can assign their permission</p>
                             <p class="text-sm">Roles Permissions- Go to System Settings > Roles Permissions here we can create different Roles for staff users and then assign different user permission to this Role. To add new role enter Role Name then click on Save button all existing roles can be see from right side of this page. By default in eSkooly School you will get 6 user roles SuperAdmin, Admin, Teacher, Accountant, Librarian, Receptionist. You can edit name or permission of these roles except SuperAdmin. To assign permission click on Assign Permission button from Action column. At this page you can see Module wise different Features and their different Permissions. Carefully assign different permissions on roles. After assigning permission, check where it is effecting in system. There are 4 types of permissions present here View, Add, Edit and Delete. Here note that if you are assigning Add/Edit or Delete permission then View permission should be given obviously if you have not given View permission then system can behave inconsistent so in best practice if you are giving Add/Edit/Delete any one permission then give View permission too.</p>
                         </div>
                      </li>
                   </ol>
             </div>` },
            {
                slug: "base-setup", title: "Base Setup", content: `
              <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Base Setup</h3>
                <img src="/Eskooly/base-setup.png" alt="Base Setup" class="w-full rounded-lg shadow-md border border-slate-200" />
                <ol class="list-decimal pl-5 space-y-4 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Base Setup</span>
                        <p class="mt-1">Administrator can add gender, religion, and blood group.</p>
                    </li>
                </ol>
              </div>`
            },
            {
                slug: "academic-year", title: "Academic Year", content: `
              <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Academic Year</h3>
                <img src="/Eskooly/academic-year.png" alt="Academic Year" class="w-full rounded-lg shadow-md border border-slate-200" />
                <ol class="list-decimal pl-5 space-y-4 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Academic Year</span>
                        <p class="mt-1">Administrator can add academic year.</p>
                    </li>
                </ol>
              </div>`
            },
            {
                slug: "session", title: "Session", content: `
              <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Session</h3>
                <img src="/Eskooly/session.png" alt="Session" class="w-full rounded-lg shadow-md border border-slate-200" />
                <ol class="list-decimal pl-5 space-y-4 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Session</span>
                        <p class="mt-1">You can manage session. You have to go System Setting > Session. You can add new session, edit & delete.</p>
                    </li>
                </ol>
              </div>`
            },
            {
                slug: "holiday", title: "Holiday", content: `
              <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Holiday</h3>
                <img src="/Eskooly/holiday.png" alt="Holiday" class="w-full rounded-lg shadow-md border border-slate-200" />
                <ol class="list-decimal pl-5 space-y-4 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Holiday</span>
                        <p class="mt-1">Administrator can manage holiday. You have to go System Setting > Holiday. You can add new holiday, edit & delete. It will show in dashboard calendar.</p>
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Manage Holiday</span>
                        <p class="mt-1">Administrator can edit & delete. It will show in dashboard calendar.</p>
                    </li>
                </ol>
              </div>`
            },
            {
                slug: "sms-settings", title: "Sms Settings", content: `
              <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">Sms Settings</h3>
                <img src="/Eskooly/sms-settings.png" alt="Sms Settings" class="w-full rounded-lg shadow-md border border-slate-200" />
                 <ol class="list-decimal pl-5 space-y-4 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Sms Settings</span>
                        <p class="mt-1">You can seletect sms sender service provider</p>
                        <p class="mt-1">Clickatell SMS Platform is a powerful, fully scalable communication system that enables you to manage your business communication more effectively. With an infrastructure covering over 220 territories and 1 000+ networks, your business can now connect with customers in every corner of the world.</p>
                        <img src="/Eskooly/sms-settings2.png" alt="Sms Settings" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Sms Configuration</span>
                        <p class="mt-1">You can send sms to the students, teachers, & parents. You have to purchase package for sending message. There are two already implemented.</p>
                        <img src="/Eskooly/sms-settings3.png" alt="Sms Settings" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
              </div>`
            },
            {
                slug: "weekend", title: "Weekend", content: `
              <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">Weekend</h3>
                <img src="/Eskooly/weekend.png" alt="Weekend" class="w-full rounded-lg shadow-md border border-slate-200" />
                <ol class="list-decimal pl-5 space-y-4 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Weekend</span>
                        <p class="mt-1">You can edit weekend.</p>
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Checked Weekend</span>
                        <p class="mt-1">If you want to set satureday is weekend day, then you have to edit that day and checked as weekend and update your data.</p>
                    </li>
                </ol>
              </div>`
            },
            {
                slug: "language-settings", title: "Language Settings", content: `
              <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">Language Settings</h3>
                <img src="/Eskooly/language-settings.png" alt="Language Settings" class="w-full rounded-lg shadow-md border border-slate-200" />
                <ol class="list-decimal pl-5 space-y-4 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Language</span>
                        <p class="mt-1">You can add multiple languages. Select language and add into system.</p>
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Default</span>
                        <p class="mt-1">You can make it default. After making default, system will converted into default language</p>
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Language Setup</span>
                        <p class="mt-1">You can setup your custom language</p>
                        <img src="/Eskooly/language-setup.png" alt="Language Settings" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                        <span class="font-bold text-slate-700">1. Chnage language Phrases</span>
                        <p class="mt-1">You can change phrases according to your language</p>
                </ol>
              </div>`
            },
            {
                slug: "backup", title: "Backup", content: `
              <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">Backup</h3>
                <img src="/Eskooly/backup.png" alt="Backup" class="w-full rounded-lg shadow-md border border-slate-200" />
                <ol class="list-decimal pl-5 space-y-4 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Backup</span>
                        <p class="mt-1">You can create backup from your system, You can also resote data from your local pc.</p>
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Images Backup</span>
                        <p class="mt-1">You can create all images backup from your system, You can also download into your local PC for safety.</p>
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Whole System Backup</span>
                        <p class="mt-1">You can create whole system backup.</p>
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Database Backup</span>
                        <p class="mt-1">You can also create database backup and download, restore, and delete</p>
                    </li>
                </ol>
              </div>`
            },
            {
                slug: "update-system", title: "Update System", content: `
              <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">Update System</h3>
                <img src="/Eskooly/update-system.png" alt="Update System" class="w-full rounded-lg shadow-md border border-slate-200" />
                <ol class="list-decimal pl-5 space-y-4 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Update System</span>
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
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Dormitory Rooms</h3>
                        <img src="/Eskooly/dormitory-rooms.png" alt="Add Dormitory Rooms" class="w-full rounded-lg shadow-md border border-slate-200" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Add Dormitory Rooms</span>
                        <p class="mt-1 mb-3">Super admin can add dormitory Rooms which should have to include dormitory name, room number, room type, bed number and it's cost.</p>
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Select Action</span>
                        <p class="mt-1 mb-3">In the dormitory room list, super admin can able to edit and delete the dormitory room information.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "dormitory-list", title: "Dormitory List", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Dormitory List</h3>
                        <img src="/Eskooly/dormitory-list.png" alt="Add Dormitory" class="w-full rounded-lg shadow-md border border-slate-200" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Add Dormitory</span>
                        <p class="mt-1 mb-3">For adding dormitory super admin need to add dormitory name,type and how much allotment are possible in this dormitory.</p>
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Select Actions</span>
                        <p class="mt-1 mb-3">Edit and delete option are permitted for super admin.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "room-type", title: "Room Type", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Room Type</h3>
                        <img src="/Eskooly/room-type.png" alt="Add Room Type" class="w-full rounded-lg shadow-md border border-slate-200" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Add Room Type</span>
                        <p class="mt-1 mb-3">Which kinds of rooms are available in the dormitory, super admin can add this.</p>
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Select Actions</span>
                        <p class="mt-1 mb-3">Super admin can edit and delete the room type list.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "student-dormitory-report", title: "Student Dormitory Report", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Student Dormitory Report</h3>
                <img src="/Eskooly/student-transport-report.png" alt="Search Student Dormitory Report" class="w-full rounded-lg shadow-md border border-slate-200" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Search Student Dormitory Report</span>
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
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Transport Route</h3>
                <img src="/Eskooly/add-route.png" alt="Routes" class="w-full rounded-lg shadow-md border border-slate-200" />
                <div class="space-y-4">
                <h1 class="text-lg font-bold text-slate-700">Transport Route</h1>
                    <p class="font-bold text-slate-700">This module has 3 sections -</p>
                    <ul class="list-disc pl-5 space-y-1 text-slate-600">
                        <li>Routes</li>
                        <li>Vehicles</li>
                        <li>Assign Vehicle</li>
                        <li>Student Transport Report</li>
                    </ul>
                    <p class="text-slate-600">First we will add Routes then add Vehicles then Assign Vehicle on Routes then check Student Transport Report.</p>
                    
                    <div class="space-y-4 mt-4 text-slate-600">
                        <p><span class="font-bold text-slate-700">Routes -</span> Go to Transport > Routes enter Route Title, Fare & click Save button. All the routes can be see right side at this page.</p>
                        
                        <p>Go to Transport > Vehicles enter Vehicle No, Vehicle Model, Year Made, Driver Name, Driver License, Driver Contact, Note & click Save button. All the vehicles can be see right side at this page.</p>
                        
                        <p><span class="font-bold text-slate-700">Student Transport Report -</span> Go to Student Information > Student Transport Report here you can view all students list who has availed transport facility.</p>
                    </div>
                </div>
            </div>` },
            {
                slug: "vehicle", title: "Vehicle", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Vehicle</h3>
                <img src="/Eskooly/vehicle.png" alt="Add Vehicle" class="w-full rounded-lg shadow-md border border-slate-200" />
            </div>` },
            {
                slug: "assign-vehicle", title: "Assign Vehicle", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Assign Vehicle</h3>
                <img src="/Eskooly/assign-vehicle.png" alt="Assign Vehicle" class="w-full rounded-lg shadow-md border border-slate-200" />
            </div>` },
            {
                slug: "student-transport-report", title: "Student Transport Report", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Student Transport Report</h3>
                <img src="/Eskooly/student-transport-report (1).png" alt="Student Transport Report" class="w-full rounded-lg shadow-md border border-slate-200" />
            </div>` }
        ]
    },
    {
        category: "Inventory",
        items: [
            {
                slug: "item-category", title: "Item Category", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Item Category</h3>
                <img src="/Eskooly/item-category-list.png" alt="Add Item Category" class="w-full rounded-lg shadow-md border border-slate-200" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Add Item Category</span>
                        <p class="mt-1 mb-3">To add item category super admin should add category name. By Clicking Select in action column super admin can get the option of delete and edit.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "item-list", title: "Item List", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Item List</h3>
                <img src="/Eskooly/item.png" alt="Add Item List" class="w-full rounded-lg shadow-md border border-slate-200" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Add Item List</span>
                        <p class="mt-1 mb-3">In Item List Submodule, to submit an item need to add item name, select an item category which is added in item category submodule.</p>
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Select action</span>
                        <p class="mt-1 mb-3">Super admin can edit and delete the item list.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "item-store", title: "Item Store", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Item Store</h3>
                <img src="/Eskooly/item-store.png" alt="Add Item Store" class="w-full rounded-lg shadow-md border border-slate-200" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Add Item Store</span>
                        <p class="mt-1 mb-3">Store name is essential for adding item store and store number is the identity of the store.</p>
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Select action</span>
                        <p class="mt-1 mb-3">Super admin can edit and delete the item store.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "supplier", title: "Supplier", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Supplier</h3>
                <img src="/Eskooly/supplier.png" alt="Add Supplier" class="w-full rounded-lg shadow-md border border-slate-200" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Add Supplier</span>
                        <p class="mt-1 mb-3">For adding supplier, supplier's company name, name, mobile number, email address is needed to submit.</p>
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Select Action</span>
                        <p class="mt-1 mb-3">Super admin can edit and delete the supplier list.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "item-receive", title: "Item Receive", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Item Receive</h3>
                <img src="/Eskooly/item-receive.png" alt="Receive Details" class="w-full rounded-lg shadow-md border border-slate-200" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Receive Details</span>
                        <p class="mt-1 mb-3">At first select supplier which is come from the supplier list that is added by super admin. Select the available store or warehouse which also added by super admin in the item store submodule. Then need to add the reference number, receive date.<br> After that select the item from the item list which is listed in item list submodule, put it's unit price, quantity. Sub total will show the individual item's total price. After adding all sub total the final result will be shown. <br>If check the full paid option no due will be shown. If not, then put the amount in total paid field. If it's meet up the total due will zero, if not then due or surplus amount will show in the total due field. Payment method can also be selected in this operation.</p>
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Add Item</span>
                        <p class="mt-1 mb-3">By just clicking the add button, new item will be added in the calculation process.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "item-receive-list", title: "Item Receive List", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Item Receive List</h3>
                        <img src="/Eskooly/item-receive-list.png" alt="Paid and Unpaid Status" class="w-full rounded-lg shadow-md border border-slate-200" />
                        <img src="/Eskooly/purchase-details.png" alt="Purchase Details" class="w-full rounded-lg shadow-md border border-slate-200" />
                        <img src="/Eskooly/add-payment.png" alt="Purchase Details" class="w-full rounded-lg shadow-md border border-slate-200" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Paid and Unpaid Status</span>
                        <p class="mt-1 mb-3">In the item receive list paid or unpaid status is shown. If payment is complete then the status show paid, if not then show unpaid</p>
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Select Actions</span>
                        <p class="mt-1 mb-3">In this list, view purchase details, edit and delete the list, if unpaid then add payment and view payment are included in action.</p>
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">New Item Receive</span>
                        <p class="mt-1 mb-3">By clicking the new item receive button, easily can add a new item receive.</p>
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Purchase Receipt</span>
                        <p class="mt-1 mb-3">To see the purchase receipt, just click the view option in the action column for individual item receive then can possible to see the purchase detail information.</p>
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Add Payment</span>
                        <p class="mt-1 mb-3">If any amount of due remains then we can complete the payment by clicking the add payment in the action column. After that we can fill up the payment through a particular payment method.In this case of operation reference number should be added.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "item-sell-list", title: "Item Sell List", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Item Sell List</h3>
                        <img src="/Eskooly/item-sell.png" alt="Paid and Unpaid Status" class="w-full rounded-lg shadow-md border border-slate-200" />
                        <img src="/Eskooly/item-sell1.png" alt="Paid and Unpaid Status" class="w-full rounded-lg shadow-md border border-slate-200" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Paid and Unpaid Status</span>
                        <p class="mt-1 mb-3">In the item sell list paid or unpaid status is shown. If payment is complete then the status show paid, if not then show unpaid</p>
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Select Actions</span>
                        <p class="mt-1 mb-3">Action column in this list, super admin can able to see sell details in view option, edit and delete the list and if unpaid then able to add payment and view payment.</p>
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">New Item Sell</span>
                        <p class="mt-1 mb-3">By clicking the new item sell button, easily can add a new item's sell information.</p>
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Item Sell</span>
                        <p class="mt-1 mb-3">At first select the person who buy the item, whom are added by super admin. Then need to add the reference number, receive date of selling.<br> After that select the item from the item list which is listed in item list submodule, put it's unit price, quantity. Sub total will show the individual item's total price. After adding all sub total the final result will be shown. <br>If check the full paid option no due will be shown. If not, then put the amount in total paid field. If it's meet up the total due will zero, if not then due or surplus amount will show in the total due field. Payment method can also be selected in this operation. After done the submission the sell information will be listed in item sell list.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "issue-item", title: "Issue Item", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Issue Item</h3>
                        <img src="/Eskooly/issue-a-item.png" alt="Issue a Item" class="w-full rounded-lg shadow-md border border-slate-200" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Issue a Item</span>
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
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Add Book</h3>
                        <img src="/Eskooly/add-book.png" alt="Add Book" class="w-full rounded-lg shadow-md border border-slate-200" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Add Book</span>
                        <p class="mt-1 mb-3">Super admin can add book which is available in the library. For adding book, book title, category, subject is mandatory. For proper book details information need to fill up all the field in this form.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "book-list", title: "Book List", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Book List</h3>
                        <img src="/Eskooly/book-list.png" alt="Book List" class="w-full rounded-lg shadow-md border border-slate-200" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Book List</span>
                        <p class="mt-1 mb-3">All the books which are available in the library are shown in this book list.Super Admin can edit and delete the book information if he wants.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "book-categories", title: "Book Categories", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Book Categories</h3>
                        <img src="/Eskooly/book-categories.png" alt="Book Categories" class="w-full rounded-lg shadow-md border border-slate-200" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Book Categories</span>
                        <p class="mt-1 mb-3">If Super admin wants he can add new book category in this submodule. All the book category list is shown in Category list.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "add-member", title: "Add Member", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Add Member</h3>
                        <img src="/Eskooly/add-member.png" alt="Add Member" class="w-full rounded-lg shadow-md border border-slate-200" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Add Member</span>
                        <p class="mt-1 mb-3">Super admin can add new library member. In this case member type and member id is necessary to fill up.</p>
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Cancel member list</span>
                        <p class="mt-1 mb-3">Library member lists are shown in member list. Super admin can cancel the member if he wants.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "issue-books", title: "Issue Books", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Issue Books</h3>
                        <img src="/Eskooly/issue-books.png" alt="Issue Books" class="w-full rounded-lg shadow-md border border-slate-200" />
                        <img src="/Eskooly/issued-books.png" alt="Issue Books" class="w-full rounded-lg shadow-md border border-slate-200" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Issue Books</span>
                        <p class="mt-1 mb-3">All the members of the library are shown in this list. Where super admin can issue or return book/books to him.</p>
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Issue or Return Books</span>
                        <p class="mt-1 mb-3">By clicking the Issue/Return Books super admin can able to issue book to the library member and if want he can return book.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "issued-book-list", title: "Issued Book List", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Issued Book List</h3>
                        <img src="/Eskooly/issued-book-list.png" alt="Issued Book List" class="w-full rounded-lg shadow-md border border-slate-200" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Search Issued books</span>
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
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Notice Board</h3>
                        <img src="/Eskooly/notice-board.png" alt="Notice Board" class="w-full rounded-lg shadow-md border border-slate-200" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">All notices</span>
                        <p class="mt-1 mb-3">Super admin can see all the notices which is select for.</p>
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Add notice</span>
                        <p class="mt-1 mb-3">super admin can add new notice by clicking the add notice button.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "send-message", title: "Send Message", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Send Message</h3>
                <img src="/Eskooly/add_notice.png" alt="Add notices" class="w-full rounded-lg shadow-md border border-slate-200" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Add notices</span>
                        <p class="mt-1 mb-3">To add new notice at first type the notice title, then write the message content. Notice date and publication date should have to select. Select the notice viewer in the message to section. <br>By clicking the Notice board button in the top-right then can able to go notice board list.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "send-email", title: "Send Email", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Send Email</h3>
                <img src="/Eskooly/send-email1.png" alt="Send email or SMS (Group)" class="w-full rounded-lg shadow-md border border-slate-200" />
                        <img src="/Eskooly/send-email2.png" alt="Send email or SMS (Individual)" class="w-full rounded-lg shadow-md border border-slate-200" />
                        <img src="/Eskooly/send-email3.png" alt="Send email or SMS (Class)" class="w-full rounded-lg shadow-md border border-slate-200" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Send email or SMS (Group)</span>
                        <p class="mt-1 mb-3">Super admin can send email or sms by checking in send through check box. Title and description is also mandatory field.<br> If he wants to send this to several receiver then he can select several receiver in the group section.</p>
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Send email or SMS (Individual)</span>
                        <p class="mt-1 mb-3">If he wants to send this to individual receiver or certain role receiver then he can select role of the receiver and select the name or names in the individual section.</p>
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Send email or SMS (Class)</span>
                        <p class="mt-1 mb-3">If he wants to send this to particular class students then he can select a class and certain section in the class section.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "email-sms-log-list", title: "Email / Sms Log List", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Email / Sms Log List</h3>
                <img src="/Eskooly/log.png" alt="Email / Sms Log List" class="w-full rounded-lg shadow-md border border-slate-200" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Email / Sms Log List</span>
                        <p class="mt-1 mb-3">All the email and sms which is send that are listed here. If wants to send new email or sms then just click the Send Email/Sms button.<br> In the list, email or sms receiver list are shown. This are group, individual and class.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "event-list", title: "Event List", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Event List</h3>
                <img src="/Eskooly/event.png" alt="Add Event" class="w-full rounded-lg shadow-md border border-slate-200" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Add Event</span>
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
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Add Homework</h3>
                <img src="/Eskooly/add-homework.png" alt="Add Homework" class="w-full rounded-lg shadow-md border border-slate-200" />
                        <img src="/Eskooly/homework-list.png" alt="Select Action" class="w-full rounded-lg shadow-md border border-slate-200" />
                        <img src="/Eskooly/evaluation.png" alt="Search Homework list" class="w-full rounded-lg shadow-md border border-slate-200" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Add Homework</span>
                        <p class="mt-1 mb-3">To add homework, class, section, subjects, date, submission date, marks and description are needed to submit.</p>
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Select Action</span>
                        <p class="mt-1 mb-3">In the action column, evaluation, edit and delete options are include.</p>
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Search Homework list</span>
                        <p class="mt-1 mb-3">To search homework list, class, section, subject are needed to select.</p>
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Add homework</span>
                        <p class="mt-1 mb-3">By clicking the add homework super admin can add new homework.</p>
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Evaluation homework</span>
                        <p class="mt-1 mb-3">Super admin can evaluate the homework by clicking the evaluation option in action column.In evaluation homework, students are evaluated by marks, comments, homework status.</p>
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Evaluation Date</span>
                        <p class="mt-1 mb-3">Evaluation date should have to select before evaluation page submit.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "homework-evaluation-report", title: "Homework Evaluation Report", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Homework Evaluation Report</h3>
                        <img src="/Eskooly/homework-evaluation-report.png" alt="Search Homework Evaluation Report" class="w-full rounded-lg shadow-md border border-slate-200" />
                        <img src="/Eskooly/view.png" alt="Search Homework Evaluation Report" class="w-full rounded-lg shadow-md border border-slate-200" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Search Homework Evaluation Report</span>
                        <p class="mt-1 mb-3">To search homework evaluation report, class, section, subjects should have to select.</p>
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Select Action</span>
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
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Class Routine</h3>
                        <img src="/Eskooly/class-routine.png" alt="Add Class routine" class="w-full rounded-lg shadow-md border border-slate-200" />
                        <img src="/Eskooly/create-class-routine.png" alt="Add Class routine" class="w-full rounded-lg shadow-md border border-slate-200" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Add Class routine</span>
                        <p class="mt-1 mb-3">In the class routine submodule, by selecting the class and section super admin can see the particular class routine. Where by clicking on the (+) symbol admin can assign the class routine.</p>
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Assigned Class routine</span>
                        <p class="mt-1 mb-3">Assigned class for particular day and period are shown on the class routine list.</p>
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Create Class routine</span>
                        <p class="mt-1 mb-3">To create class routine just click on the particular period of a day. Here have to select subject, teacher and class room.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "assign-subject", title: "Assign Subject", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Assign Subject</h3>
                        <img src="/Eskooly/assign-subject.png" alt="Search Assigned Subject" class="w-full rounded-lg shadow-md border border-slate-200" />
                        <img src="/Eskooly/add-assign-subject.png" alt="Search Assign Subject Create" class="w-full rounded-lg shadow-md border border-slate-200" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Search Assigned Subject</span>
                        <p class="mt-1 mb-3">Select class and section for searching assigned subjects for particular class and it's individual section.</p>
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Assigned Subject List</span>
                        <p class="mt-1 mb-3">In this list, particular subjects and it's assigned course teachers are shown. If assign new subjects just click the right-top assign Subject button.</p>
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Search Assign Subject Create</span>
                        <p class="mt-1 mb-3">For assign subjects list, search by selecting the class and section.</p>
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Assign Subject Create</span>
                        <p class="mt-1 mb-3">For assign subject select the teacher in the teacher section.By clicking the delete button, subject will be deleted.By clicking the save button the subjects will assigned.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "assign-class-teacher", title: "Assign Class Teacher", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Assign Class Teacher</h3>
                        <img src="/Eskooly/assign-class-teacher.png" alt="Assign Class Teacher" class="w-full rounded-lg shadow-md border border-slate-200" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Assign Class Teacher</span>
                        <p class="mt-1 mb-3">For assigning class routine, class, section and teachers should have to select. The Assigned class teacher list will show in the Class Teacher List. Here teacher list can be edited and deleted.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "subject", title: "Subject", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Subject</h3>
                        <img src="/Eskooly/add-subjects.png" alt="Add Subject" class="w-full rounded-lg shadow-md border border-slate-200" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Add Subject</span>
                        <p class="mt-1 mb-3">To add subject, the subject name,the subject code should be added and check the theory or practical which type of subject is it. <br>Subject list can be edited and deleted by the super admin.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "class", title: "Class", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Class</h3>
                        <img src="/Eskooly/class.png" alt="Add Class" class="w-full rounded-lg shadow-md border border-slate-200" />
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Add Class</span>
                        <p class="mt-1 mb-3">To add Class, the class name and section or sections should be added. <br>Class list can be edited and deleted by the super admin.</p>
                    </li>
                </ol>
            </div>` },
            {
                slug: "sections", title: "Sections", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Sections</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Add Section</span>
                        <p class="mt-1 mb-3">To add section, the section name should be added.</p>
                         <img src="/Eskooly/sections.png" alt="Add Section" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Select Section</span>
                        <p class="mt-1 mb-3">Section list can be edited and deleted by the super admin.</p>
                        <img src="/Eskooly/sections.png" alt="Select Section" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "class-room", title: "Class Room", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Class Room</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Add Class Room</span>
                        <p class="mt-1 mb-3">To add class room, room number and capacity should be added.</p>
                        <img src="/Eskooly/class-room.png" alt="Add Class Room" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Select Section</span>
                        <p class="mt-1 mb-3">Class room list can be edited and deleted by the super admin.</p>
                        <img src="/Eskooly/class-room.png" alt="Select Section" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "class-exam-time-setup", title: "Class & Exam Time Setup", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Class & Exam Time Setup</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Add Time</span>
                        <p class="mt-1 mb-3">To add time, time type, period, start and ending time should be added.</p>
                        <img src="/Eskooly/add-time.png" alt="Add Time" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Select Section</span>
                        <p class="mt-1 mb-3">Time list can be edited and deleted by the super admin.</p>
                         <img src="/Eskooly/add-time.png" alt="Select Section" class="w-full rounded-lg shadow-md border border-slate-200" />
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
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Add Exam</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Add Examination Name</span>
                        <p class="mt-1 mb-3">Super admin can add examination name. He has been allowed to edit and delete the examination name.</p>
                        <img src="/Eskooly/add-exam.png" alt="Add Examination Name" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Exam Setup</span>
                        <p class="mt-1 mb-3">By clicking the Exam Setup button super admin can enter the exam setup page.</p>
                        <img src="/Eskooly/exam-setup1.png" alt="Exam Setup" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "exam", title: "Exam", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Exam</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Add Exam</span>
                        <p class="mt-1 mb-3">To exam setup, firstly select the class or classes then select the corresponding section or sections,secondly select the particular subjects or subject then select the exam type. Total mark of the particular exam should have to setup in the exam mark field. To distribute the exam marks, We have to identify the how much marks in which exam category, like written exam has 70, class test has 20, homework has 10 and the total marks will show in Total field. The marks can't cross the exam marks.</p>
                        <img src="/Eskooly/exam-setup1.png" alt="Add Exam" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Exam List</span>
                        <p class="mt-1 mb-3">In the exam list, exam's all information are shown in details. Super admin can delete the exam list.</p>
                        <img src="/Eskooly/examinations1.png" alt="Exam List" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "exam-schedule", title: "Exam Schedule", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Exam Schedule</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Add Exam Schedule</span>
                        <p class="mt-1 mb-3">By Clicking the right-top button add exam schedule super admin enter the exam setup schedule page.</p>
                        <img src="/Eskooly/exam-schedule.png" alt="Add Exam Schedule" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Search Exam Schedule</span>
                        <p class="mt-1 mb-3">To search the exam schedule super admin have to select the exam name, class and section. The assigned exam routine is shown in the exam schedule section.</p>
                        <img src="/Eskooly/exam-schedule.png" alt="Search Exam Schedule" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Search for Set Exam Schedule</span>
                        <p class="mt-1 mb-3">After clicking the add exam schedule button super will enter Exam Schedule create page. In this page, by selecting the exam name, class and section super admin will get the set exam schedule section.</p>
                        <img src="/Eskooly/exam-schedule2.png" alt="Search for Set Exam Schedule" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Assign Exam Schedule</span>
                        <p class="mt-1 mb-3">To assign exam schedule just click the (+) symbol, then super admin will get the create exam routine modal.</p>
                        <img src="/Eskooly/exam-schedule3.png" alt="Assign Exam Schedule" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Assigned exam Schedule</span>
                        <p class="mt-1 mb-3">If any exam schedule is assigned then the assigned exam schedule is shown in this list.</p>
                        <img src="/Eskooly/exam-schedule.png" alt="Assigned exam Schedule" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Create Exam Routine</span>
                        <p class="mt-1 mb-3">just select the date and the room number super admin can setup the exam routine for particular subject in particular date and time.</p>
                        <img src="/Eskooly/exam-schedule.png" alt="Create Exam Routine" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "marks-register", title: "Marks Register", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Marks Register</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Mark Register</span>
                        <p class="mt-1 mb-3">In the mark register submodule, super admin can see the mark registered list by searching through selecting the exam name,class and section. By clicking the right-top button add button super admin can enter the fills marks page. To search the certain fill up marks list, super admin have to select exam name, class, section and subject.</p>
                        <img src="/Eskooly/mark-register.png" alt="Mark Register" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">fill up the Marks</span>
                        <p class="mt-1 mb-3">In the Fill up marks lists, All the particular mark sections are included like class test marks, homework marks, written exam etc. If anyone was absent in the examination then just check the is absent. After distribute all marks by submit the save button then marks will be registered.</p>
                        <img src="/Eskooly/mark-grade.png" alt="fill up the Marks" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "exam-attendance", title: "Exam Attendance", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Exam Attendance</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Attendance Create</span>
                        <p class="mt-1 mb-3">By clicking the exam attendance button, super admin can able to enter the exam attendance setup page.</p>
                        <img src="/Eskooly/exam-attendance.png" alt="Attendance Create" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Search Exam Attendance</span>
                        <p class="mt-1 mb-3">To search the certain exam attendance have to select the exam name, class, section and subject.</p>
                        <img src="/Eskooly/exam-attendance.png" alt="Search Exam Attendance" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Attendance Status</span>
                        <p class="mt-1 mb-3">Exam attendance list will show the the search result. in this list, attendance column will show which student was present or absent in this particular exam.</p>
                        <img src="/Eskooly/exam-attendance1.png" alt="Attendance Status" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Setup Exam Attendance</span>
                        <p class="mt-1 mb-3">To get the desire exams attendance setup section just select the exam name, class, section and subject. in this attendance setup section, super admin can check the absent or present option button.</p>
                        <img src="/Eskooly/exam-attendance.png" alt="Setup Exam Attendance" class="w-full rounded-lg shadow-md border border-slate-200" />
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
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Approve Leave Request</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Approve Leave Request</span>
                        <p class="mt-1 mb-3">Super admin can approve the leave request on this page. By clicking the view icon he can approve the request from the leave request list.</p>
                        <img src="/Eskooly/Approve-Leave-Request.png" alt="Approve Leave Request" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "apply-leave", title: "Apply Leave", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Apply Leave</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Apply Leave</span>
                        <p class="mt-1 mb-3">Super admin can apply for leave on this page. Apply date, leave type, leave from date, leave to date, reason and attachment are needed to submit.</p>
                        <img src="/Eskooly/apply-leave.png" alt="Apply Leave" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Leave List</span>
                        <p class="mt-1 mb-3">Super admin can see the leave list. He can edit and delete the leave list.</p>
                        <img src="/Eskooly/view-leave-details.png" alt="Leave List" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "leave-define", title: "Leave Define", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Leave Define</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Add Leave Define</span>
                        <p class="mt-1 mb-3">Super admin can add leave define. He has to select the role and leave type. Then he has to put the days of leave.</p>
                        <img src="/Eskooly/leave-define.png" alt="Add Leave Define" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Select Action</span>
                        <p class="mt-1 mb-3">Super admin can edit and delete the leave define information.</p>
                        <img src="/Eskooly/leave-define.png" alt="Select Action" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "leave-type", title: "Leave Type", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Leave Type</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Add Leave Type</span>
                        <p class="mt-1 mb-3">Super admin can add leave type.</p>
                        <img src="/Eskooly/leave-type.png" alt="Add Leave Type" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Select Action</span>
                        <p class="mt-1 mb-3">Super admin can edit and delete the leave type information.</p>
                        <img src="/Eskooly/leave-type.png" alt="Select Action" class="w-full rounded-lg shadow-md border border-slate-200" />
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
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Staff List</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Search Staff List</span>
                        <p class="mt-1 mb-3">For searching staff list user has to select the role or by searching with key word.</p>
                        <img src="/Eskooly/staff_directory.png" alt="Search Staff List" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Add Staff</span>
                        <p class="mt-1 mb-3">For adding staff user has to fill up the basic information, academic information, social links and document info. In basic info, staff ID, role, designation, department, first name, last name, father name, mother name, email, gender, date of birth, date of joining, mobile, emergency contact, marital status, photo, current address, permanent address, qualification, work experience, note are needed to submit.</p>
                        <img src="/Eskooly/add_staff1.png" alt="Add Staff" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Profile</span>
                        <p class="mt-1 mb-3">Here staff's personal profile, payroll, documents, timeline are shown.</p>
                        <img src="/Eskooly/profile.png" alt="Profile" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "staff-attendance", title: "Staff Attendance", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Staff Attendance</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Search</span>
                        <p class="mt-1 mb-3">To search staff attendance, user needs to select the role and attendance date.</p>
                        <img src="/Eskooly/staff_attendance.png" alt="Search" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Mark Holiday</span>
                        <p class="mt-1 mb-3">Super admin can mark holiday for all staff by clicking the mark holiday button.</p>
                        <img src="/Eskooly/staff_attendance.png" alt="Mark Holiday" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Save Attendance</span>
                        <p class="mt-1 mb-3">Super admin can save the attendance by clicking the save attendance button. In the attendance list, he can check the present, late, absent, half day option.</p>
                        <img src="/Eskooly/staff_attendance.png" alt="Save Attendance" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "staff-attendance-report", title: "Staff Attendance Report", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Staff Attendance Report</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Search</span>
                        <p class="mt-1 mb-3">To search staff attendance report, user needs to select the role, month and year. The report will show the present, late, absent, half day, holiday status for the particular month.</p>
                        <img src="/Eskooly/staff_attendance-report.png" alt="Search" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "payroll", title: "Payroll", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Payroll</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Salary Template</span>
                        <p class="mt-1 mb-3">Super admin can add salary template. He has to add salary grade, basic salary, overtime rate per hour. In the allowance section, he can add allowance label and amount. In the deduction section, he can add deduction label and amount. Net salary will be calculated automatically.</p>
                        <img src="/Eskooly/payroll.png" alt="Salary Template" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Salary Assign</span>
                        <p class="mt-1 mb-3">Super admin can assign salary to the staff. He has to select the role and staff. Then he can select the salary template.</p>
                        <img src="/Eskooly/generate_payroll.png" alt="Salary Assign" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Salary Payment</span>
                        <p class="mt-1 mb-3">Super admin can pay the salary to the staff. He has to select the role and month-year. Then he can pay the salary.</p>
                        <img src="/Eskooly/generate_payroll1.png" alt="Salary Payment" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "payroll-report", title: "Payroll Report", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Payroll Report</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Search Payroll</span>
                        <p class="mt-1 mb-3">To search payroll report, user needs to select the role, month and year.</p>
                        <img src="/Eskooly/payroll_report.png" alt="Search Payroll" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Payroll Report List</span>
                        <p class="mt-1 mb-3">The payroll report list will show the staff name, role, department, designation, basic salary, allowance, deduction, net salary, payment date, status.</p>
                        <img src="/Eskooly/payroll_report.png" alt="Payroll Report List" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` }
        ]
    },
    {
        category: "Accounts",
        items: [
            {
                slug: "accounts-head", title: "Account's Head", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Account's Head</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Account's head</span>
                        <p class="mt-1 mb-3">Super admin can add account's head. By clicking the select action he has been allowed to edit and delete the account's head.</p>
                        <img src="/Eskooly/chart-of-account.png" alt="Account's head" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "income", title: "Income", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Income</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Add Income</span>
                        <p class="mt-1 mb-3">To add income information, Income head, Name, Invoice number, Date, Amount, Document and Description are needed to submit.</p>
                        <img src="/Eskooly/income.png" alt="Add Income" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Select Action</span>
                        <p class="mt-1 mb-3">Super admin can edit and delete the income list.</p>
                        <img src="/Eskooly/income.png" alt="Select Action" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "expense", title: "Expense", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Expense</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Add Expense</span>
                        <p class="mt-1 mb-3">To add expense information, Expense head, Name, Invoice number, Date, Amount, Document and Description are needed to submit.</p>
                        <img src="/Eskooly/expense.png" alt="Add Expense" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Select Action</span>
                        <p class="mt-1 mb-3">Super admin can edit and delete the expense list.</p>
                        <img src="/Eskooly/expense.png" alt="Select Action" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` }
        ]
    },
    {
        category: "Fees Collection",
        items: [
            {
                slug: "fees-reminder", title: "Fees Reminder", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Fees Reminder</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Fees Reminder</span>
                        <p class="mt-1 mb-3">Super admin can set the fees reminder status as active or inactive. He needs to select the reminder type and days.</p>
                        <img src="/Eskooly/sms-settings.png" alt="Fees Reminder" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "fees-type", title: "Fees Type", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Fees Type</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Add Fees Type</span>
                        <p class="mt-1 mb-3">To add fees type, name, fees code and description are needed to submit.</p>
                        <img src="/Eskooly/fees_type.png" alt="Add Fees Type" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Select Action</span>
                        <p class="mt-1 mb-3">Super admin can edit and delete the fees type list.</p>
                        <img src="/Eskooly/fees_type.png" alt="Select Action" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "fees-group", title: "Fees Group", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Fees Group</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Add Fees Group</span>
                        <p class="mt-1 mb-3">To add fees group, name and description are needed to submit.</p>
                        <img src="/Eskooly/fees_group.png" alt="Add Fees Group" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Select Action</span>
                        <p class="mt-1 mb-3">Super admin can edit and delete the fees group list.</p>
                        <img src="/Eskooly/fees_group.png" alt="Select Action" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "fees-master", title: "Fees Master", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Fees Master</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Add Fees Master</span>
                        <p class="mt-1 mb-3">To add fees master, fees group, fees type, due date and amount, fine type, percentage, fine amount are needed to submit.</p>
                        <img src="/Eskooly/fees_master.png" alt="Add Fees Master" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Select Action</span>
                        <p class="mt-1 mb-3">Super admin can edit and delete the fees master list. By clicking the assign button he can assign the fees master to the student.</p>
                        <img src="/Eskooly/fees_master.png" alt="Select Action" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "fees-discount", title: "Fees Discount", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Fees Discount</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Add Fees Discount</span>
                        <p class="mt-1 mb-3">To add fees discount, name, discount code, amount and description are needed to submit.</p>
                        <img src="/Eskooly/fees_discount.png" alt="Add Fees Discount" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Select Action</span>
                        <p class="mt-1 mb-3">Super admin can edit and delete the fees discount list. By clicking the assign button he can assign the fees discount to the student.</p>
                        <img src="/Eskooly/fees_discount.png" alt="Select Action" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "collect-fees", title: "Collect Fees", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Collect Fees</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Search Collect Fees</span>
                        <p class="mt-1 mb-3">For Searching the fees collection list, user has to select class and section.</p>
                        <img src="/Eskooly/collect_fees.png" alt="Search Collect Fees" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Collect Fees</span>
                        <p class="mt-1 mb-3">By clicking the collect fees button, user can collect the fees from the student. He can see the student details and fees details. He can pay the fees by clicking the pay button. He can add discount and fine in the payment section.</p>
                        <img src="/Eskooly/collect_fees.png" alt="Collect Fees" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "search-fees-payment", title: "Search Fees Payment", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Search Fees Payment</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Search Fees Payment</span>
                        <p class="mt-1 mb-3">To search fees payment, user has to search by payment ID.</p>
                        <img src="/Eskooly/search_fees_payments.png" alt="Search Fees Payment" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` }
        ]
    },
    {
        category: "Student Information",
        items: [
            {
                slug: "student-category", title: "Student Category", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Student Category</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Add Student Category</span>
                        <p class="mt-1 mb-3">To add student category, super admin needs to add category name.</p>
                        <img src="/Eskooly/student_category.png" alt="Add Student Category" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Select Action</span>
                        <p class="mt-1 mb-3">Super admin can edit and delete the student category list.</p>
                        <img src="/Eskooly/student_category.png" alt="Select Action" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "add-student", title: "Add Student", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Add Student</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Add Student</span>
                        <p class="mt-1 mb-3">To add student, admission number, roll number, class, section, first name, last name, gender, date of birth, religion, mobile number, email, admission date, blood group, student photo are needed to submit. User can also add parent details, bank details and hostel details.</p>
                        <img src="/Eskooly/student_admission1.png" alt="Add Student" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "student-list", title: "Student List", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Student List</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Search Student List</span>
                        <p class="mt-1 mb-3">To search student list, user has to select class and section or by searching with key word.</p>
                        <img src="/Eskooly/student-list.png" alt="Search Student List" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Select Action</span>
                        <p class="mt-1 mb-3">In the student list, user can view the student details, edit and delete the student. He can also add fees payment in the action column.</p>
                        <img src="/Eskooly/student-list.png" alt="Select Action" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "student-attendance", title: "Student Attendance", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Student Attendance</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Search Student Attendance</span>
                        <p class="mt-1 mb-3">To search the student attendance, user has to select class, section and date.</p>
                        <img src="/Eskooly/student_attendance.png" alt="Search Student Attendance" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Save Attendance</span>
                        <p class="mt-1 mb-3">User can mark holiday for all student. He can save the attendance by clicking the save attendance button. In the attendance list, he can check the present, late, absent, half day option.</p>
                        <img src="/Eskooly/student_attendance.png" alt="Save Attendance" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "student-attendance-report", title: "Student Attendance Report", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Student Attendance Report</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Search Student Attendance Report</span>
                        <p class="mt-1 mb-3">To search the student attendance report, user has to select class, section, month and year. The report will show the present, late, absent, half day, holiday status for the particular month.</p>
                        <img src="/Eskooly/student_attendance-report.png" alt="Search Student Attendance Report" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "subject-wise-attendance", title: "Subject Wise Attendance", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Subject Wise Attendance</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Search Subject Wise Attendance</span>
                        <p class="mt-1 mb-3">To search the subject wise attendance, user has to select class, section, subject and date.</p>
                        <img src="/Eskooly/student_attendance.png" alt="Search Subject Wise Attendance" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                    <li>
                        <span class="font-bold text-slate-700">Save Attendance</span>
                        <p class="mt-1 mb-3">User can save the subject wise attendance by clicking the save attendance button. In the attendance list, he can check the present, late, absent, half day option.</p>
                        <img src="/Eskooly/student_attendance.png" alt="Save Attendance" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "subject-wise-attendance-report", title: "Subject Wise Attendance Report", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Subject Wise Attendance Report</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Search Subject Wise Attendance Report</span>
                        <p class="mt-1 mb-3">To search the subject wise attendance report, user has to select class, section, subject, month and year.</p>
                        <img src="/Eskooly/student_attendance-report.png" alt="Search Subject Wise Attendance Report" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "promote-students", title: "Promote Students", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Promote Students</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Search Promote Students</span>
                        <p class="mt-1 mb-3">To promote the students, user has to select class and section. Then handle the promotion section. In promotion section, user has to select the promote session, promote class and promote section. By clicking the promote button he can promote the students.</p>
                        <img src="/Eskooly/student_promote.png" alt="Search Promote Students" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` }
        ]
    },
    {
        category: "Reports",
        items: [
            {
                slug: "student-report", title: "Student Report", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Student Report</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Search Student Report</span>
                        <p class="mt-1 mb-3">To search the student report, user has to select class, section, category, gender and route.</p>
                        <img src="/Eskooly/student_reports.png" alt="Search Student Report" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "guardian-reports", title: "Guardian Reports", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Guardian Reports</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Search Guardian Reports</span>
                        <p class="mt-1 mb-3">To search the guardian report, user has to select class and section.</p>
                        <img src="/Eskooly/guardian_reports.png" alt="Search Guardian Reports" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "student-history", title: "Student History", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Student History</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Search Student History</span>
                        <p class="mt-1 mb-3">For searching the student history, user has to select class, section and year.</p>
                        <img src="/Eskooly/students_history.png" alt="Search Student History" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "student-login-credential", title: "Student Login Credential", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Student Login Credential</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Search Student Login Credential</span>
                        <p class="mt-1 mb-3">To search the student login report, user has to select class and section.</p>
                       <img src="/student-login-credential-1.png" alt="Search Student Login Credential" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "fees-statement", title: "Fees Statement", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Fees Statement</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Search Fees Statement</span>
                        <p class="mt-1 mb-3">For searching the student fees statement report, user has to select class, section, student, fees group, fees type, mode, date from and date to.</p>
                        <img src="/Eskooly/FeesStatement1.png" alt="Search Fees Statement" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "balance-fees-report", title: "Balance Fees Report", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Balance Fees Report</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Search Balance Fees Report</span>
                        <p class="mt-1 mb-3">For searching the student balance fees report, user has to select class and section.</p>
                        <img src="/Eskooly/Balance_Fees_Report.png" alt="Search Balance Fees Report" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "transaction-report", title: "Transaction Report", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Transaction Report</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Search Transaction Report</span>
                        <p class="mt-1 mb-3">For searching the student balance fees report, user has to select date from and date to.</p>
                        <img src="/Eskooly/TransactionReport1.png" alt="Search Transaction Report" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "class-routine-report", title: "Class Routine", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Class Routine</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Search Class Routine</span>
                        <p class="mt-1 mb-3">For searching the class report, user has to select class and section.</p>
                        <img src="/Eskooly/class_routine_report.png" alt="Search Class Routine" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "exam-schedule-report", title: "Exam Schedule", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Exam Schedule</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Search Exam Schedule</span>
                        <p class="mt-1 mb-3">For searching the exam schedule report, user has to select exam, class and section.</p>
                        <img src="/Eskooly/exam_routine_report.png" alt="Search Exam Schedule" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "exam-result", title: "Exam Result", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Exam Result</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Search Exam Result</span>
                        <p class="mt-1 mb-3">For searching the exam result report, user has to select exam, class and section.</p>
                        <img src="/Eskooly/result-view.png" alt="Search Exam Result" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "attendance-report", title: "Attendance Report", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Attendance Report</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Search Attendance Report</span>
                        <p class="mt-1 mb-3">For searching the attendance report, user has to select class, section and date.</p>
                        <img src="/Eskooly/student_attendance-report.png" alt="Search Attendance Report" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` }
        ]
    },
    {
        category: "Student Panel",
        items: [
            {
                slug: "student-login", title: "Login", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Student Login</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Login</span>
                        <p class="mt-1 mb-3">Student can login with his username and password.</p>
                        <img src="/Eskooly/login.png" alt="Login" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "student-dashboard", title: "Dashboard", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Student Dashboard</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Dashboard</span>
                        <p class="mt-1 mb-3">Student can see the dashboard with summary.</p>
                        <img src="/Eskooly/student_panel.png" alt="Dashboard" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "student-profile", title: "My Profile", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Student Profile</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">My Profile</span>
                        <p class="mt-1 mb-3">Student can see his Profile information.</p>
                        <img src="/Eskooly/profile.png" alt="My Profile" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "student-teachers", title: "Teachers", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Student Teachers</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Teachers</span>
                        <p class="mt-1 mb-3">Student can see the list of teachers.</p>
                        <img src="/Eskooly/teacher.png" alt="Teachers" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "student-subject", title: "Subject", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Student Subject</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Subject</span>
                        <p class="mt-1 mb-3">Student can see his subjects.</p>
                        <img src="/Eskooly/student_panel.png" alt="Subject" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "student-class-routine", title: "Class Routine", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Student Class Routine</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Class Routine</span>
                        <p class="mt-1 mb-3">Student can see his class routine.</p>
                        <img src="/Eskooly/class_routine.png" alt="Class Routine" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "student-lesson-plan", title: "Lesson Plan", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Student Lesson Plan</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Lesson Plan</span>
                        <p class="mt-1 mb-3">Student can see the lesson plan.</p>
                        <img src="/Eskooly/student_panel.png" alt="Lesson Plan" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "student-syllabus", title: "Syllabus", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Student Syllabus</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Syllabus</span>
                        <p class="mt-1 mb-3">Student can see the syllabus.</p>
                        <img src="/Eskooly/student_panel.png" alt="Syllabus" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "student-homework", title: "Homework", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Student Homework</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Homework</span>
                        <p class="mt-1 mb-3">Student can see his homework.</p>
                        <img src="/Eskooly/homework.png" alt="Homework" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "student-online-exam", title: "Online Exam", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Student Online Exam</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Online Exam</span>
                        <p class="mt-1 mb-3">Student can appear in online exam.</p>
                        <img src="/Eskooly/online-exam.png" alt="Online Exam" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "student-leave", title: "Leave", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Student Leave</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Leave</span>
                        <p class="mt-1 mb-3">Student can apply for leave and see status.</p>
                        <img src="/Eskooly/student_panel.png" alt="Leave" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "student-library", title: "Library", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Student Library</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Library</span>
                        <p class="mt-1 mb-3">Student can see book list and issued books.</p>
                        <img src="/Eskooly/library1.png" alt="Library" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "student-transport", title: "Transport", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Student Transport</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Transport</span>
                        <p class="mt-1 mb-3">Student can see transport routes and vehicles.</p>
                        <img src="/Eskooly/transport.png" alt="Transport" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "student-dormitory", title: "Dormitory", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Student Dormitory</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Dormitory</span>
                        <p class="mt-1 mb-3">Student can see dormitory list.</p>
                        <img src="/Eskooly/student_panel.png" alt="Dormitory" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "student-notice", title: "Notice", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Student Notice</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Notice</span>
                        <p class="mt-1 mb-3">Student can see notice board.</p>
                        <img src="/Eskooly/notice-board.png" alt="Notice" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` }
        ]
    },
    {
        category: "Parents Panel",
        items: [
            {
                slug: "parents-login", title: "Login", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Parents Login</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Login</span>
                        <p class="mt-1 mb-3">Parent can login.</p>
                        <img src="/Eskooly/login.png" alt="Login" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "parents-dashboard", title: "Dashboard", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Parents Dashboard</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Dashboard</span>
                        <p class="mt-1 mb-3">Parent can see dashboard.</p>
                        <img src="/Eskooly/student_panel.png" alt="Dashboard" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "parents-my-children", title: "My Children", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Parents My Children</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">My Children</span>
                        <p class="mt-1 mb-3">Parent Can See the Selected Student's Profile.</p>
                        <img src="/Eskooly/my_children1.png" alt="My Children" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "parents-fees", title: "Fees", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Parents Fees</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Student Fees Statement</span>
                        <p class="mt-1 mb-3">Parent Can See the particular student's fees statement.</p>
                        <img src="/Eskooly/fees1.png" alt="Student Fees Statement" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "parents-class-routine", title: "Class Routine", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Parents Class Routine</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Class Routine</span>
                        <p class="mt-1 mb-3">Parent can see class routine.</p>
                        <img src="/Eskooly/class_routine.png" alt="Class Routine" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "parents-homework", title: "Homework", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Parents Homework</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Homework</span>
                        <p class="mt-1 mb-3">Parent can see homework.</p>
                        <img src="/Eskooly/homework.png" alt="Homework" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "parents-exam", title: "Exam", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Parents Exam</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Exam</span>
                        <p class="mt-1 mb-3">Parent can see exam result.</p>
                        <img src="/Eskooly/result-view.png" alt="Exam" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "parents-attendance", title: "Attendance", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Parents Attendance</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Attendance</span>
                        <p class="mt-1 mb-3">Parent can see attendance.</p>
                        <img src="/Eskooly/student_attendance.png" alt="Attendance" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "parents-notice", title: "Notice", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Parents Notice</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Notice</span>
                        <p class="mt-1 mb-3">Parent can see notice.</p>
                        <img src="/Eskooly/notice-board.png" alt="Notice" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "parents-library", title: "Library", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Parents Library</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Library</span>
                        <p class="mt-1 mb-3">Parent can see library info.</p>
                        <img src="/Eskooly/library1.png" alt="Library" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "parents-transport", title: "Transport", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Parents Transport</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Transport</span>
                        <p class="mt-1 mb-3">Parent can see transport info.</p>
                        <img src="/Eskooly/transport.png" alt="Transport" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` },
            {
                slug: "parents-dormitory", title: "Dormitory", content: `
            <div class="space-y-6">
                <h3 class="text-xl font-bold text-[#6f42c1] mb-2 text-center">eSkooly Parents Dormitory</h3>
                <ol class="list-decimal pl-5 space-y-8 marker:text-slate-700 marker:font-bold">
                    <li>
                        <span class="font-bold text-slate-700">Dormitory</span>
                        <p class="mt-1 mb-3">Parent can see dormitory info.</p>
                        <img src="/Eskooly/dormitory.png" alt="Dormitory" class="w-full rounded-lg shadow-md border border-slate-200" />
                    </li>
                </ol>
            </div>` }
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
    "Accounts": Wallet,
    "Fees Collection": CreditCard,
    "Student Information": User,
    "Reports": BarChart,
    "Student Panel": Laptop,
    "Parents Panel": Monitor
};

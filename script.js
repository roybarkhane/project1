console.log('hello');
const f= document.getElementById("data");
f.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("clicked");
    const ab=document.getElementById("browser").value;
    const name=document.getElementById('name').value;
    const add=document.getElementById("address").value;
    const feet=document.getElementById("feet").value;
    const rate=document.getElementById('rate').value;
    const date= new Date();
    console.log(date);
    document.querySelector("main").innerHTML=`
    <div class="logo"><img src="logo.png" alt=""></div>
<h2 class="company-name">
Giant Waterproofing Co.
</h2>
<div class="reg-date">
    <div class="reg-num">GWC/R/16776/2022</div>
    <div class="date"><span class="dd">${date.getDate()}</span>.<span class="mm">${date.getMonth()}</span>.<span class="yyyy">${date.getFullYear()}</span></div>
</div>
<div class="name-add">
    <h3 class="name">${ab+' '+name}</h2>
    <h3 class="address">${add}</h2>
</div>
<h4 class="title">Re: Waterprofing on Roof</h2>
<h4 class="salutation">Dear sir,</h2>
<p class="msg">
<p style="margin-top:20px;">
    We thank you very much for your kind inquiry for waterproofing on Roof area. Please note that our parent
    company <strong>Giant Group Ltd</strong> is manufacturer of wide range of constructions chemical,
    waterproofing, heat
    proofing chemicals as per the international standards. In the brand name of <strong>“Giant“</strong>
    since last 15
    years.
</p>
<p style="margin-top:20px;">
    <strong> Giant’s 7 Layer Waterproofing treatment </strong>is a Waterproofing technique designed and
    developed for a
    complete <strong>waterproofing solution with leakage free warranty for 12 years.</strong> This system
    can be applied for
    Waterproofing on RCC surfaces, Side Walls, Asbestos sheets, Tin Sheets, Water Tanks etc
</p>
<h3 style="margin-top:20px; text-decoration: underline;
">Description of Chemicals:</h3>
<dl class="chem-des">
    <ol>
        <li>
            <dt>
                RainSiler :
            </dt>
            <dd>
                <strong> Anti-Fungal, Penetrative & Nano technology of waterproofing.</strong> Drastic
                Reduction in masonry maintenance cost with long term improved resistance to vagaries of
                weather Protects Building, saves energy, keeps Substrate dry reducing the thermal
                conductivity. A water dilatable solution designed to impart repellency to masonry surface.
            </dd>
        </li>
        <li>
            <dt>
                RainPrime :
            </dt>
            <dd>RainPrime plays major role in facade coating system . It forms a dry water repellent zone
                beneath the coating consolidate the substrate and enhance bonding of the coating. It is gas
                permeable, durable, protects paints & plasters against harmful influences form within the
                masonry.</dd>
        </li>
        <li>
            <dt>
                WCC 303 :
            </dt>
            <dd>A highly concentrated latex emulsion for waterproofing applications as well as protective
                coating to cementations substances. WCC 303 is mixed with water & cement in 1:1:2.5 by wt.
                It is highly economical comparatively to any such product available in the market.</dd>
        </li>
        <li>
            <dt>
                CP Binding :
            </dt>
            <dd>Ready to use. Seal immediately on contact with water. Effective crack sealing in concrete
                &masonry surfaces.Can stop the leaking dripping water, until the final repairsare carried
                out. Hardens instantly under continuous wet conditions.</dd>
        </li>
        <li>
            <dt>
                SafeCoat:
            </dt>
            <dd>
                Giant SafeCoat is a fiber reinforced elastomeric liquid applied water proofing membrane. It
                is formulated with select elastomeric and resilient acrylic polymers and reinforcing
                polyester fibers. Upon curing, it forms a thick, seamless, durable membrane thus offering
                ultimate waterproofing. Can be used for building roofs, terraces, parapet, sunshades and
                exterior vertical walls. It can also be applied on existing IPS, sound brick-bat coba or
                cementatious waterproofing.
            </dd>
        </li>
    </ol>
</dl>
</p>
<h2 class="procedure">Waterproofing with Procedure (7 Layer)</h2>
<p class="description">
<ol style="margin-left: 50px; line-height:1.8rem; font-weight:600; font-style:italic;">
    <li>Clean the surface by rubbing with wire brush & other mechanical tools to remove dust, and other
        loose materials. Repairing of Cracks work will be carried out as per requirement on Basement by
        RainPrime with cement.</li>
    <li>Apply 1st Coat.( Neno Coat) Giant RainSiller.</li>
    <li>Apply 2nd Coating of Giant Fibermesh.</li>
    <li>Apply 3rd & 4h coating of Giant RainPrime with cement (Highly waterproofing & crack
        resistant coating).</li>
    <li>Apply 5th & 6th & 7th perpendicular coats of SafeCoat without dilution. Highly waterproofing &
        crack resistant coating).</li>  
        
</ol>
</p>
<h2 class="area-detail-heading">Area Details Provided By Candidate</h2>
<p class="area-details">
    Working area <strong class="area"> ${feet} </strong>Sq fit. (approx.) of treated place should be calculated as per actual or as per site in charge direction.
</p>
<h2 class="Rate-heading">Rate:</h2>
<p class="Rate-details">
    Rs <strong class="rate">${rate}</strong> per sq fit.(Rates are inclusive Chemicals, mechanical tools, Labor, & Supervision etc)
</p>
<h2 class="total-amount" style="border: 1px solid blue; display:inline-block; padding: 10px;">Total Amount: <span class="sqfit"> ${feet} </span>&times;<span class="rate"> ${rate} </span>=<span class="total">&#x20B9;${feet*rate}</span></h2>

<h3 style="color: red; margin: 50px 0; ">Note:</h3>
<p style="border:1px solid red; padding:15px;">All details provided by candidate via tele-communication is considered in this document. If any changes found while measuring area on site, then that area will be considered in contract and amount will changed accordingly.</p>
<h3 style="margin-top: 40px; text-align:center;">Product for Terrace Waterproofing
    Area <span class="total">${feet}</span>sq.ft (Approx.)
</h3>
<table border="1">
    <thead>
        <tr>
            <td>S.No</td>
            <td>Product</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>RainSiller</td>
        </tr>
        <tr>
            <td>2</td>
            <td>RainPrime</td>
        </tr>
        <tr>
            <td>3</td>
            <td>SafeCoat</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Fibermesh</td>
        </tr>
        <tr>
            <td>5</td>
            <td>Cement</td>
        </tr>
    </tbody>
</table>
<div class="t-and-d">
    <h2>Terms and Conditions</h2>
    <p>
        <dl>
            <ol>
                <li>
                    <dt>Taxes:</dt>
                    <dd><strong>18 % GST Extra.</strong></dd>
                </li>
                <li>
                    <dt>Payment Terms:</dt>
                    <dd>100 % Matrials Advance along with work order. Balance Amount complete  work.</dd>
                </li>
                <li>
                    <dt>Transport Fee Extra</dt>
                    <dd></dd>
                </li>
                <li>
                    <dt>Validity:</dt>
                    <dd>Our quotation is valid for a period of 12 days from this date and validitythereof is subject our final confirmation.</dd>
                </li>
                <li>
                    <dt>General:</dt>
                    <dd>We need your co-operation to provide us safe space for storing our materials,during the work.</dd>
                </li>
                <li>
                    <dt>Kindly note that the actual measurement will be in line with the Industrial standards.</dt>
                    <dd>The above work shall be completed as per schedule mutually discussedand agreed, to avoid inconvenience place the order well in advance.</dd>
                </li>
                <li>
                    <dt>Completion:</dt>
                    <dd>
                        The above work shall be completed as per schedule mutually discussedand agreed, to avoid inconvenience place the order well in advance.
                        <ol>
                            <li>
                                The work order and advance must be allowed 15 working Days prior to the date of commencement of work. To arrange the materials and utilities.
                            </li>

                            <li>
                                Kindly ensure the work area to be available on time so that our workmen’s idle and other inconvenience in service can be avoided.
                            </li>
                        </ol>
                    </dd>
                </li>
                <li>
                    <dt>Water and Electricity:</dt>
                    <dd>Necessary construction water and power required forexecution of our work should be provided free of cost by you.</dd>
                </li>
            </ol>
            <h4 style="border:1px solid blue; padding: 20px; margin-top:20px;">Warranty : 8 Years (Eight Years) (from the date of completion of the work )
                </h4>
            
        </dl>
    </p>
    <div class="company-details">
        <h2>Bank Account Details[HDFC Bank]</h2>
        <h3>Name: Giant WaterProofing Co.</h3>
        <h3>A/C No: 50100279317630</h3>
        <h3>IFSC Code:HDFC0005386</h3>
    </div>
    <div class="qr-code">
        <img src="qr.jpg" alt="">
    </div>
    <div class="contact">
        <h3>Contact US</h3>
        <p class="contact-details">
            Name: <span class="name">roy barkhane</span>
            Mobile: <span class="mobile">+919111469300</span>
            Email: <span class="email">info@giant.com.co</span>
            Website: <span class="website">www.giantwaterproofing.in</span>
        </p>
    </div>
    <div class="footer">
        <h2>Address</h2>
        <p class="address"><strong>HEAD OFFICE</strong>: 385 Giant Infront of Dovt ITI, Nasrullaganj, Bhopal, Madhya Pradesh (M.P.)-466331)</p>
    </div></div>
    `;
});

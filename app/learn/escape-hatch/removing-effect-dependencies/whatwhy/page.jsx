export default function Page(){
    return <div className="w-full h-full flex flex-col">
     <section>
        <p>Reactive values include props and all variables and functions declared directly inside of your component.</p>
        <em>1.Should this code move to an event handler ?</em>
        <p>Above question is so important .</p>
        <em>2.Removing effect dependencies</em>
        <p>
            Sometimes there are redundant effect synchronization . I would say the effect synchronization. 
            The most common cases which triggers redundant synchronization are:
            <b>1.</b>theme state .The state is not so important , it should not trigger the re-synchronization. I would to like to say reconnection and disconnection of chat . 
            Rather, It should be in <em>useEffectEvent.</em>
            <b>2.</b>Variables and states that declared inside component , props which passed from a parent - all that are reactive values.  But the dear ones declared inside <em>useffectEvent</em> are not reactive .
            note that function and object are the exceptionals.
             They are not like the primitives.
        </p>
     </section>
    </div>
}